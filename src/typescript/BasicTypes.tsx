


export const BasicTypes = () => {

    const name = 'Fernando';
    const age: number = 37;
    const isActive: boolean = true;

    const powers: string[] = ['React', 'ReactNative', 'Angular', 'Vue', 'Qwik'];


    return (
        <>
            <h3>Tipo básicos</h3>

            {name} {age} {isActive ? 'true' : 'false'}
            <br />

            {powers.join(', ')}
        </>
    );
}
