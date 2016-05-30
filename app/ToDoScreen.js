'use strict';

import TodoApp from '../units/urb-example-todo/app/components/ToDoApp';
import TodoAppRoute from './TodoAppRoute';
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { RootContainer } from 'react-relay';

const styles = StyleSheet.create( {
    container: {
        flex: 1,
    },
} )



export default class ToDoScreen extends React.Component
{
  render( ) : void
  {
    return(
      <View style={[styles.container, this.props.style]}>
        <RootContainer
          Component={TodoApp}
          route={new TodoAppRoute({status: 'any'})}
        />
      </View>
    )
  }
}
