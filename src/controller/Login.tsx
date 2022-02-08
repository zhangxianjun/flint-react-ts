import * as React from 'react';

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Login({ name, enthusiasmLevel = 1 }: Props) {
    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + enthusiasmLevel}
            </div>
        </div>
    );
}

export default Login;