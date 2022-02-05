package com.github.medeirosjhow.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.github.medeirosjhow.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
