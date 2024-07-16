
export const BasicFunctions = () => {

    const addTwoNumber = (a: number, b: string): string => {
        // return (a + b).toString();
        return `${a + b}`;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar: {addTwoNumber(2, '8')}</span>
        </>
    );
}
