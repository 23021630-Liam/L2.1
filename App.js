import React from 'react';
import {View, Text} from 'react-native';
import Movie from './components/Movie';

const AllMovies =() => {
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Movie title="Doctor Sleep" year={2019} icon_name="paw" poster={require('./img/doctor-sleep.jpg')}/>
        </View>
    )
}

export default AllMovies;
