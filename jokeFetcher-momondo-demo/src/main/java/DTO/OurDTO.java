/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

/**
 *
 * @author lukas
 */
public class OurDTO {

    private String joke1;
    private String joke1Reference;
    private String joke2;
    private String joke2Reference;

    public OurDTO(ChuckDTO chuck, DadDTO dad) {
        this.joke1 = chuck.getValue();
        this.joke1Reference = "https://api.chucknorris.io/jokes/random";
        this.joke2 = dad.getJoke();
        this.joke2Reference = "https://icanhazdadjoke.com/";
    }

    public String getJoke1() {
        return joke1;
    }

    public String getJoke1Reference() {
        return joke1Reference;
    }

    public String getJoke2() {
        return joke2;
    }

    public String getJoke2Reference() {
        return joke2Reference;
    }
    
    
    

}
