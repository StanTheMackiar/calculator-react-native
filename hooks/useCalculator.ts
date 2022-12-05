import { useRef, useState } from 'react'

enum Operators {
    addition, subtraction, multiplication, divison, none,
}

export const useCalculator = () => {

    const [ result, setResult ] = useState('0');
    const [ lastResult, setLastResult ] = useState('0');

    const operation = useRef<Operators>( Operators.none )

    const clean = () => {
        setResult('0');
        setLastResult('0');
    }

    const putCharacter = ( characterPressed: string ) => {

        if ( result.includes('.') && characterPressed === '.' ) return;
        
        if ( (result === '0' || result === '-0') && (characterPressed === '.') ) return setResult( result + characterPressed )

        if ( result === '0' ) return setResult( characterPressed )
        
        if ( result.length > 10 ) return
        
        setResult( result + characterPressed )
    }

    const deleteCharacter = () => {
       
        let negative = '';
        let tempNumber = result;
        if ( result.includes('-') ) {
            negative = '-';
            tempNumber = result.substring(1);
        }

        if ( tempNumber.length > 1 ) {
            setResult( negative + tempNumber.slice(0, -1) )
        } else {
            setResult('0')
        }
    }

    const positiveToNegative = () => {

        if ( result === '0' ) return;

        if ( result.includes('-') ){
            setResult( result.replace('-', '') )
        } else {
            setResult( '-' + result );
        }
    }

    const changeResultPosition = () => {

        if( result.endsWith('.') ) setLastResult( result.slice(0, -1) );
        else setLastResult( result );
      
        setResult('0');
    }

    const btnAddition = () => {
        changeResultPosition();
        operation.current = Operators.addition;
    };

    const btnSubtraction = () => {
        if (result === '0') return positiveToNegative();

        changeResultPosition();
        operation.current = Operators.subtraction;
    };

    const btnMultiplication = () => {
        changeResultPosition();
        operation.current = Operators.multiplication;
    };

    const btnDivision = () => {
        changeResultPosition();
        operation.current = Operators.divison;
    };

    const calculate = () => {

        if (( result === '0' ) && ( lastResult === '0' )) return;

        const num1 = Number( result );
        const num2 = Number( lastResult )
        let finalResult = 0;

        try {
            switch ( operation.current ) {
                case Operators.addition:
                    finalResult = num2 + num1
                    break;
                case Operators.subtraction:
                    finalResult = num2 - num1
                    break;
                case Operators.multiplication:
                    finalResult = num2 * num1
                    break;
                case Operators.divison:
                    finalResult = num2 / num1
                    break;
                case Operators.none:
                    return
                default:
                    break;
            }
        } catch (error) {
            setResult('Syntax Error');
            setLastResult('0');
        }

        operation.current = Operators.none;
        setResult( `${finalResult}`)
        setLastResult('0');
    }


    return {
        btnAddition,
        btnDivision,
        btnMultiplication,
        btnSubtraction,
        calculate,
        clean,
        deleteCharacter,
        lastResult,
        positiveToNegative,
        putCharacter,
        result,
    }

}