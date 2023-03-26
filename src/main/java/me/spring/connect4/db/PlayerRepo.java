package me.spring.connect4.db;

import me.spring.connect4.models.Player;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepo extends CrudRepository<Player, String> {

    Player findPlayerByPlayerID(String playerID);
    Player findPlayerByUsernameAndPassword(String username, String password);
    Player findByUsername(String username);

}
