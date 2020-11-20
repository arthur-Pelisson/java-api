

package api;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import api.User;
    
@CrossOrigin(origins = "http://localhost:4200")
@RestResource(exported = false)
public interface UserRepository extends JpaRepository<User, Integer> {

}

