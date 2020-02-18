package custom.dev.service.services;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import custom.dev.service.model.User;

@RestController
@CrossOrigin
public class UserController {

    @RequestMapping("/login")
    public boolean login(@RequestBody User user) {

        System.out.println("Printing User");
        System.out.println(user.getUsername());
        System.out.println(user.getPassword());
        return
          user.getUsername().equals("usaer") && user.getPassword().equals("password");
    }
}