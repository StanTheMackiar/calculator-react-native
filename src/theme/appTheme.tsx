import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    smallResult: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
        marginHorizontal: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
    },
    button: {
        height: 75,
        width: 75,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    textButton: {
        textAlign: 'center',
        color: 'black',
        padding: 10,
        fontSize: 30,
        fontWeight: '400'
    }
});
