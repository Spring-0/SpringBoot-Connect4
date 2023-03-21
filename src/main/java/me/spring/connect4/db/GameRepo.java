package me.spring.connect4.db;

import me.spring.connect4.models.constants.GameStatus;
import me.spring.connect4.models.game.Game;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepo extends CrudRepository<Game, String> {

    List<Game> findGameEntitiesByGameStatus(GameStatus gameStatus);

}
