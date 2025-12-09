package com.eventhub.eventhum_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventhub.eventhum_backend.model.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
}