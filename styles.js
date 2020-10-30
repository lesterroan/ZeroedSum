import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: "#33b5e5",
    },
    container: {
        flex: 1,
    },
    footer: {
        flex: 1,
        flexDirection: 'row'
    },
    fundStatus: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "steelblue"
    },
    fund: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: "#33b5e5",
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: "black",
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: "darkgray",
    },
    highlight: {
        fontWeight: '700',
    },
    header: {
        backgroundColor: "steelblue",
        height: 30,
        paddingTop: 5,
        paddingLeft: 20,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        color: "white",
    },
    footer: {
        color: "darkgray",
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },

    categoryGroups: {
        marginTop: 20,
        backgroundColor: "white",
        borderRadius: 5,

        // paddingLeft: 10,
        marginLeft: 50,
        marginRight: 50,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    category: {
        width: 60,
        paddingLeft: 15,
        marginTop: 10,
    },
    underBudget: {
        backgroundColor: "steelblue",
    },
    zeroedBudget: {
        backgroundColor: "green",
    },
    overBudget: {
        backgroundColor: "red",
    },
    numPad: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "steelblue",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },
    number: {
        backgroundColor: "white",
        width: 90,
        height: 90,
        fontSize: 16,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
    },

    ///////////////////

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalButtons: {
        // flex: 1,
        // flexDirection: 'row',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    safe: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#33b5e5",
        fontSize: 30,
        height: 50,
    },
    danger: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        alignContent: 'center',
        fontSize: 20,
        backgroundColor: "#e56333",
        height: 50
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    categoryHeader: {
        backgroundColor: "steelblue",
    }
});


export default styles;