import { StyleSheet, Dimensions } from "react-native"

const { height } = Dimensions.get('window');
// mevcut açılmış ekran boyutu

const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.064,
        backgroundColor: '#F7D102',
    }, //sarı kısım üstteki
    headerOne: {
        width: '80%',
        backgroundColor: 'white',
        height: height * 0.064,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
    }, // beyaz sol kısım
    image: {
        width: 30,
        height: 30,
    },
    headerOneView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        paddingLeft: 10,
        borderLeftColor: '#F3F2FD',
        borderLeftWidth: 2
    },
})

export default styles;