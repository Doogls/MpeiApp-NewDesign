import React from "react";
import {Fragment} from "react";
import {useTheme} from "react-native-paper";
import {SafeAreaView, ScrollView} from "react-native";
import {NavigationHeader} from "../CommonComponents/DrawerHeader";
import {ListAvatarItem} from "./Components";

const DevsScreen: React.FC<{navigation: any, route: any}> = (props)=>{
    const {colors} = useTheme()
    return (
        <Fragment>
            <SafeAreaView style={{flex:0, backgroundColor: colors.backdrop}}/>
            <SafeAreaView style={[{alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: colors.background}]}>
                <NavigationHeader {...props} backable title={'Разработчики'}/>
                <ScrollView style={{width: '90%'}}>
                    <ListAvatarItem title={'TheKeeroll'} link={'https://vk.com/dead_inside_0x41'} textStyle={{fontWeight: 'bold'}} image={require('../../../assets/images/DevAvatars/Z.png')}/>
                    <ListAvatarItem title={'DragonSavA'} link={'https://vk.com/dragonsava'} textStyle={{fontWeight: 'bold', color: colors.accent}} image={require('../../../assets/images/DevAvatars/A.png')}/>
                    <ListAvatarItem title={'Doogls'} link={'https://vk.com/doogls'} textStyle={{fontWeight: 'bold'}} image={require('../../../assets/images/Gratitudies/Doogls.jpg')}/>
                </ScrollView>
            </SafeAreaView>
        </Fragment>
    )
}

export default DevsScreen
