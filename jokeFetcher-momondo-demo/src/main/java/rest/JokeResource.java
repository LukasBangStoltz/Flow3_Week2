package rest;

import DTO.ChuckDTO;
import DTO.DadDTO;
import DTO.OurDTO;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeoutException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import jokefetcher.FetchHandler;
import utils.HttpUtils;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {

    Gson gson = new Gson();

    @Context
    private UriInfo context;
    private static ExecutorService es = Executors.newCachedThreadPool();

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws TimeoutException, ExecutionException, InterruptedException {

        List<String> dtos = FetchHandler.runParallelWithCallables(es);

        ChuckDTO chuckDTO = gson.fromJson(dtos.get(0), ChuckDTO.class);

        DadDTO dadDTO = gson.fromJson(dtos.get(1), DadDTO.class);

        OurDTO combined = new OurDTO(chuckDTO, dadDTO);

        return gson.toJson(combined);
    }

}
