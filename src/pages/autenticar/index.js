
import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from "react-native-animatable"


export default function Autenticar() {
    return (
        <View style={estilos.container}>
            <Animatable.View animation="fadeInLeft" delay={1000} style={estilos.containerHeader}>
                <Text style={estilos.message}>Bem Vindo </Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" delay={1000} style={estilos.containerForm}>

                <Text style={estilos.titulo}>Email </Text>
                <TextInput
                    placeholder="Digite um e-mail:"
                    style={estilos.input}
                />

                <Text style={estilos.titulo}>Senha </Text>
                <TextInput
                    placeholder="Sua senha:"
                    style={estilos.input}
                />

                <TouchableOpacity style={estilos.botao}>
                    <Text style={estilos.botaoTexto}>Acessar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estilos.botaoRegistro}>
                    <Text style={estilos.registroTexto}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

            </Animatable.View>

        </View>
    );
}


const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d'
    },

    containerHeader: {
        marginTop: '15%',
        marginBottom: '8%',
        paddingStart: '5%'
    },

    message: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        paddingTop: '10%'
    },
    titulo: {
        fontSize: 20,
        marginTop: 28
    },
    input: {
        borderBottomWidth: 1, // Borda de baixo
        height: 40,
        marginBottom: 12,
        fontSize: 16
    },
    botao: {
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    botaoRegistro: {
        marginTop: 13,
        alignSelf: 'center'
    },
    registroTexto: {
        color: '#a1a1a1'
    }

})