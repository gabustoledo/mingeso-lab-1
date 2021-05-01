package com.mingeso.lab1.testSuma;

import static org.junit.Assert.assertEquals;

import com.mingeso.lab1.models.Operaciones;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.*;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

public class TestSuma extends AbstractTest {
    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    private final Gson gson;

    TestSuma(){
        this.gson = new GsonBuilder().setPrettyPrinting().create();
    }

    @Test
    public void sumaTest1() throws Exception {
        Operaciones suma = new Operaciones();
		suma.setPrimerNumero(10);
		suma.setSegundoNumero(15);

        String inputJson = gson.toJson(suma);

        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post("/operaciones/suma")
                .contentType(MediaType.APPLICATION_JSON)
                .content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);

        String sumaResultado = mvcResult.getResponse().getContentAsString();
        Operaciones sumaFinal = gson.fromJson(sumaResultado, Operaciones.class);

        assertEquals(25, sumaFinal.getResultado());
    }

    @Test
    public void sumaTest2() throws Exception {
        Operaciones suma = new Operaciones();
		suma.setPrimerNumero(100);
		suma.setSegundoNumero(200);

        String inputJson = gson.toJson(suma);

        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post("/operaciones/suma")
                .contentType(MediaType.APPLICATION_JSON)
                .content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);

        String sumaResultado = mvcResult.getResponse().getContentAsString();
        Operaciones sumaFinal = gson.fromJson(sumaResultado, Operaciones.class);

        assertEquals(300, sumaFinal.getResultado());
    }
}