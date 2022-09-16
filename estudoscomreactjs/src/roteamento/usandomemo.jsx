
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export function UsandoMemo() {

    const [valor, setValor] = useState(0);

    useEffect(() => { }, []);

    setInterval(() => {
        setValor(valor + 1);
    }, 1000);

    const computaValor = useMemo(function () {
        console.log(`Valor computador para: ${valor}`);
    });


};