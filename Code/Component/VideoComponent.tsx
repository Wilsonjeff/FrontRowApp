  import React, { Component } from 'react'
  import PropTypes from 'prop-types'
  import { View, StyleSheet } from 'react-native'
  import Video from 'react-native-video'
  
  export default class VideoComponent extends React.Component {
  
    renderVideo () {
        return(
          <Video
            source={{uri: "<rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov>"}}
            style={{ width: 100, height: 50 }}
            muted={true}
            repeat={true}
            resizeMode={"cover"}
            volume={1.0}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
          />
        )
    }
  
    render () {
      return (
        <View style={ styles.backgroundVideo}>
          {this.renderVideo()}
        </View>
      )
    }
  }
  
  var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      maginTop: 100,
      maginLeft: 40,
      maginRight: 40,
    },
  });