package com.eventhub.eventhum_backend.service;


import  java.util.List;
import  java.util.Optional;

import org.springframework.stereotype.Service;

import com.eventhub.eventhum_backend.model.Event;
import com.eventhub.eventhum_backend.repository.EventRepository;

@Service
public class EventService {
    private final EventRepository eventRepo;
    public EventService(EventRepository eventRepo) { this.eventRepo = eventRepo; }

    public List<Event> getAll() { return eventRepo.findAll(); }
    public Event save(Event event) { return eventRepo.save(event); }
    public Optional<Event> findById(Long id) { return eventRepo.findById(id); }
    public void deleteById(Long id) { eventRepo.deleteById(id); }
}