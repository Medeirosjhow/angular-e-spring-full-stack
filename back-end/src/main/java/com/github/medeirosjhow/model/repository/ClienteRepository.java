package com.github.medeirosjhow.model.repository;

import com.github.medeirosjhow.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{
}
