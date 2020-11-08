/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jokefetcher;

import DTO.OurDTO;
import java.io.IOException;
import java.util.AbstractList;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import utils.HttpUtils;

/**
 *
 * @author lukas
 */
public class FetchHandler {
    
     public static List<String> runParallelWithCallables( ExecutorService threadPool) throws TimeoutException, InterruptedException, ExecutionException  {
         List <String> urls = new ArrayList<>();
         urls.add("https://api.chucknorris.io/jokes/random");
         urls.add("https://icanhazdadjoke.com/");
         
        
        List<Future<String>> futures = new ArrayList<>();

        for (final String url : urls) {
            Callable<String> task = new Callable<String>() {
                @Override
                public String call() throws IOException {
                    return HttpUtils.fetchData(url);
                }
            };
            futures.add(threadPool.submit(task));
        }
        List <String> results = new ArrayList<>();
        for (Future<String> fut : futures) {
            results.add(fut.get(2000, TimeUnit.MILLISECONDS));
        }
        return results;
    }
    
}