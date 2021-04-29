package com.mingeso.lab1.models;

public class Operaciones {
    public int primerNumero;
    public int segundoNumero;
    public int resultado;

    public Operaciones(int primerNumero, int segundoNumero, int resultado) {
        this.primerNumero = primerNumero;
        this.segundoNumero = segundoNumero;
        this.resultado = resultado;
    }

    public int getPrimerNumero() {
        return primerNumero;
    }

    public void setPrimerNumero(int primerNumero) {
        this.primerNumero = primerNumero;
    }

    public int getSegundoNumero() {
        return segundoNumero;
    }

    public void setSegundoNumero(int segundoNumero) {
        this.segundoNumero = segundoNumero;
    }

    public int getResultado() {
        return resultado;
    }

    public void setResultado(int resultado) {
        this.resultado = resultado;
    }

    public void suma(){
        resultado = primerNumero + segundoNumero;
    }

    public void resta(){
        resultado = primerNumero - segundoNumero;
    }
}