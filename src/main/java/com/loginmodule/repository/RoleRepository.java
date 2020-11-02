package com.loginmodule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.loginmodule.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{
}