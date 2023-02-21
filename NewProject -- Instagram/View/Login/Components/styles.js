module.exports = {
        container:{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
        },
        loginForm: {
            width: '90%',
            alignItems: 'center',
            justifyContent: 'center'
            
        },
        iglogo: {
            width: 300,
            height: 60,
            resizeMode: 'contain'
        },
        primaryText: {
            color: 'grey',
            fontSize: 11,
            paddingTop: 20,
            paddingBottom: 10,
        },
        secondaryText: {
            fontWeight: '700',
            color: 'grey',
        },
        lowerPage: {
            flex: 0,
            flexDirection: 'column',
            alignItems: 'center',
        },
        inputStyle: {
        fontSize: 12,
        margin: 12, // gives space around the object
        borderRadius: 5, //curves the border radius
        width: 350,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 15,
                  
        },
        lineStyle: { 
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        height: 1,
        width: "40%",
        },
        lowerContainer: {
            width:400,
            flex: 0,
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center'
        },
        facebookButton:{
                fontSize:13,
                backgroundColor: '#458eff',
                width: 350,
                height: 50,
                fontWeight: '700',
                borderRadius: 10,
                justifyContent:'center', 
                alignItems: 'center',
                flexDirection: 'row',
        },
        buttonStyle: {
            fontSize:13,
            backgroundColor: '#458eff',
            width: 350,
            padding: 15,
            textAlign: "center",
            fontWeight: '700',
            borderRadius: 10,
            alignItems: "center",
            justifyContent: 'center'
        },
        lineCreate: {
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            height: 1,
            width: 500
        }
}