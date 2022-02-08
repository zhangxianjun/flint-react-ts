import * as React from 'react';
import styled from "@emotion/styled";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

function Login({ name, enthusiasmLevel = 1 }: Props) {
    return (
        <PrintWord>
            <div className="greeting">
                Hello {name + enthusiasmLevel}
            </div>
        </PrintWord>
    );
}

const PrintWord = styled.div `
  background-color: red;
`

export default Login;