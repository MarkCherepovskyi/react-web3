import {useEffect, useState} from 'react';
import * as RTStorage from 'rt-storage';

interface StorageOptions {

}

export function useGlobalStorage({
                                     storageOptions,
                                 }: {
    storageOptions: StorageOptions;
}) {
    const storage = new RTStorage(storageOptions);

    type Data = never;

    const useStorage = (
        key: string,
        initialData: Data
    ): [Data, (newData: Data | ((data: Data) => Data)) => Promise<void>] => {
        const [data, setState] = useState(initialData);

        useEffect(() => {
            function handleStorageChange(data: Data) {
                setState(data);
            }

            storage.getItem(key).then((lastData: Data | null) => {
                if (lastData) {
                    setState(lastData);
                }
            });

            const subscription = storage.subscribe(key, handleStorageChange);

            return () => {
                subscription.unsubscribe();
            };
        }, [key, storage]);

        const setData = async (newData: Data | ((data: Data) => Data)) => {
            let newValue: Data;

            if (typeof newData === 'function') {
                newValue = newData(data);
            } else {
                newValue = newData;
            }

            setState(newValue);
            await storage.setItem(key, newValue);
        };

        return [data, setData];
    };

    return useStorage;
}
