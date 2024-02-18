import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View style={ styles.container }>
      <Link
        style={ styles.link }
        href={ {
          pathname: "/page/[subject]",
          params: { subject: 'cloudIot' }
        } }>
        Aplic de Cloud, IoT E Indústria 4.0 em Python
      </Link>
      <Link
        style={ styles.link }
        href={ {
          pathname: "/page/[subject]",
          params: { subject: 'direitoCibernetico' }
        } }>
        Direito Cibernético
      </Link>
      <Link
        style={ styles.link }
        href={ {
          pathname: "/page/[subject]",
          params: { subject: 'padroesJava' }
        } }>
        Padrões de Projetos de Software com Java
      </Link>
      <Link
        style={ styles.link }
        href={ {
          pathname: "/page/[subject]",
          params: { subject: 'programacaoAndroid' }
        } }>
        Programação para dispositivos Android
      </Link>
      <Link
        style={ styles.link }
        href={ {
          pathname: "/page/[subject]",
          params: { subject: 'bigDataPython' }
        } }>
        Tópicos em Big Data com Python
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  link: {
    fontSize: 18,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});
