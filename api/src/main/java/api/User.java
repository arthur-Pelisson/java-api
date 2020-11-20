
package api;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    
   @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String name;
    private String prenom;
    private String password;
    private String email;
    private String numerodetel;



    public Integer getUserid() {
        return id;
    }

    public void setUserid(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getprenom() {
        return prenom;
    }

    public void setprenom(String prenom) {
        this.prenom = prenom;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    

    public String getnumerodetel() {
        return numerodetel;
    }

    public void setnumerodetel(String numerodetel) {
        this.numerodetel = numerodetel;
    }


    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "User{" + "id='" + id + '\'' +  ", name='" + name + '\'' + "prenom='" + prenom + '\'' + ", password='" + password + ", numerodetel='" + numerodetel + '\'' +  '\''
                + ", email='" + email + '\'' + '}';
    }
}

