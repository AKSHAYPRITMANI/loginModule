package com.loginmodule.service;

import com.loginmodule.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
