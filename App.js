import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, Image} from 'react-native';
import { Card } from 'react-native-paper';
import WebView from 'react-native-web-webview';




export default class App extends Component {
  constructor(){
    super();
    this.state={
      homePage:true,
      gallery:false,
    }
  }
  _onPressBtn = () => {
   this.setState({
     homePage: !this.state.homePage,
     gallery: !this.state.gallery,
   });
 }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Card style={styles.cardstyle}>
        <Text style={styles.welcomeTop}>Wildermiss Fan Page &nbsp;&nbsp;&nbsp;
        <Button
          title="Home Page"
          color="#C2C5CC"
          onPress={ this._onPressBtn}
        />
        <Text style={styles.welcomeTop}> &nbsp; </Text>
        <Button
          title="Gallery"
          color="#C2C5CC"
          onPress={ this._onPressBtn}
        />
        </Text>
        </Card>
        {this.state.homePage ? (
          <HomePage />
        ) : null
        }
        {this.state.gallery ? (
          <Gallery />
        ) : null
        }
      </View>
      </ScrollView>
    );
  }
}

class HomePage extends Component{
  render(){
    const uri = 'https://www.wildermiss.com/';
    return(
      <div>
      <Card style={styles.cardstyle}>
        <Text style={styles.welcome}>
          Welcome to the home page
        </Text>
      </Card>
      <Card style={styles.cardstyle}>
        <Text style={styles.welcome}>
          Wildermiss is an indie rock band from Denver, CO. The auspicious quartet has been steadily making a name for itself with a smart brand of guitar-driven pop.
        </Text>
      </Card>
      <Card style={styles.cardstyle}>
      <View style={{flexDirection: "row"}}>
        <Image style={styles.isty} source={require('./src/wildermiss1.jpg')} />
        <Image style={styles.isty} source={require('./src/wildermiss2.jpg')} />
        <Image style={styles.isty} source={require('./src/wildermiss3.jpg')} />
      </View>
      </Card>
      <Card style={styles.cardstyle}>
      <View style={{flexDirection: "row"}}>
        <Image style={styles.isty} source={require('./src/wildermiss4.jpg')} />
        <Image style={styles.isty} source={require('./src/wildermiss5.png')} />
        <Image style={styles.isty} source={require('./src/wildermiss6.png')} />
      </View>
      </Card>
      <Card style={styles.cardstyle}>
      <View style={{flexDirection: "row"}}>
        <Image style={styles.isty} source={require('./src/wildermiss7.jpg')} />
        <Image style={styles.isty} source={require('./src/wildermiss8.jpg')} />
        <Image style={styles.isty} source={require('./src/wildermiss9.jpg')} />
      </View>
      </Card>
      <Card style={styles.cardstyle}>
        <Text style={styles.welcomeLink}
          onPress={() => Linking.openURL(uri)}>
            Official Website
        </Text>
      </Card>
      </div>
    );
  }
}

class Gallery extends Component{
  render(){
    const uri = 'https://open.spotify.com/artist/7K9fyLw4RPBp8PIFkif2eB?si=K5_rcBXETsO1nBsetzn9lQ';
    const scuri = 'https://api.soundcloud.com/playlists/855337112&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
    return(
      <div>
      <Card style={styles.cardstyle}>
        <Text style={styles.welcome}>Wildermiss released their first EP in 2017. Since then, they have gained a following in their home city of Denver, as well as the surrounding area.</Text>
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>
        <Text style={{fontWeight: 'bold'}}> Genre</Text>
      </Text>
      <Text style={styles.welcome}>
        Wildermiss' sound is most similar to indie rock or indie folk, with influences from blues and bluegrass.
      </Text>
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>Wildermiss - Promise</Text>
      <WebView
      style={{ margin: 5, height: 400}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
      source={{ uri: "https://www.youtube.com/embed/RLzFPdzq0Yc" }}
      />
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>Wildermiss - Pieces</Text>
      <WebView
      style={{ margin: 5, height: 400}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
      source={{ uri: "https://www.youtube.com/embed/wa-IgIk0SRI" }}
      />
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>Wildermiss - Paralize</Text>
      <WebView
      style={{ margin: 5, height: 400}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
      source={{ uri: "https://www.youtube.com/embed/cTCNoDDYYOc" }}
      />
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>Wildermiss - Carry Your Heart</Text>
      <WebView
      style={{ margin: 5, height: 400}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
      source={{ uri: "https://www.youtube.com/embed/64ozvGJvMpA" }}
      />
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>Wildermiss - In My Mind</Text>
      <WebView
      style={{ margin: 5, height: 400}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
      source={{ uri: scuri }}
      />
      </Card>
      <Card style={styles.cardstyle}>
      <Text style={styles.welcome}>Where Wildermiss Is Playing Next</Text>
      <WebView
      style={{ margin: 5, height: 400}}
       javaScriptEnabled={true}
       domStorageEnabled={true}
       source={{uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.6458841217923!2d-104.99002928462698!3d39.65768337946056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7fd57cb2a6bd%3A0x19716ad39838cecf!2sGothic%20Theatre!5e0!3m2!1sen!2sus!4v1581450647756!5m2!1sen!2sus'}}
      />
      </Card>
      <Card style={styles.cardstyle}>
        <Text style={styles.welcomeLink}
          onPress={() => Linking.openURL(uri)}>
            Listen More on Spotify
        </Text>
      </Card>
      </div>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2C5CC',
  },
  welcome: {
    width: 600,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  welcomeLink: {
    width: 600,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    flex: 1,
    flexWrap: 'wrap',
    color: 'blue',
  },
  welcomeTop: {
    width: 700,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    flex: 1,
    flexWrap: 'wrap',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  cardstyle:{
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  isty: {
    flexDirection: 'column',
    width: 200,
    height: 200,
    margin: 10,
    flexDirection: 'row',
  },
});
