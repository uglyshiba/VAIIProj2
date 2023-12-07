package com.example.VAIIsem;
import com.example.VAIIsem.model.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {
    private final ItemRepository repository;
    @Autowired
    public Controller(ItemRepository itemRepository) {
        this.repository = itemRepository;
    }
}
