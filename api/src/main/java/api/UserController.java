package api;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.regex.*;

import api.User;
import api.UserRepository;

import javassist.tools.web.BadHttpRequest;

@RestController
@RequestMapping(path = "/users")
public class UserController {
   
    @Autowired
    private UserRepository repository;
    
    private static Pattern pattern;
    private static Matcher matcher;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:4200")
    public Iterable<User> findAll() {
        return repository.findAll();
    }
    
    @GetMapping(path = "/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<User> find(@PathVariable("id") Integer id) {
        return repository.findById(id);
    }

    @PostMapping(consumes = "application/json")
    @CrossOrigin(origins = "http://localhost:4200")
    public User create(@RequestBody User user) throws BadHttpRequest {
        pattern = Pattern.compile("^[A-Za-z0-9+_.-]+@(.+)$");
        matcher = pattern.matcher(user.getEmail());
        if (matcher.find()){
            return repository.save(user);
        }
        else {
            throw new BadHttpRequest();
        }
        
    }

    @DeleteMapping(path = "/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public void delete(@PathVariable("id") int id) {
        repository.deleteById(id);
    }

    @PutMapping(path = "/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public User update(@PathVariable("id") int id, @RequestBody User user) throws BadHttpRequest {
        if (repository.existsById(id)) {
            user.setUserid(id);
            return repository.save(user);
        } else {
            throw new BadHttpRequest();
        }
    }

}