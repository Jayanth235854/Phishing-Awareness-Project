import pygame
import random

# Initialize Pygame
pygame.init()

# Constants
WIDTH, HEIGHT = 800, 600
FPS = 60
WHITE = (255, 255, 255)

# Create the screen
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Fish Eats Fish")

# Fish properties
player_size = 50
player_x = WIDTH // 2 - player_size // 2
player_y = HEIGHT // 2 - player_size // 2
player_speed = 5

# Small fish properties
small_fish_size = 30
small_fish_speed = 3
small_fish = []

# Game loop
running = True
clock = pygame.time.Clock()

while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player_x -= player_speed
    if keys[pygame.K_RIGHT]:
        player_x += player_speed
    if keys[pygame.K_UP]:
        player_y -= player_speed
    if keys[pygame.K_DOWN]:
        player_y += player_speed

    # Clear the screen
    screen.fill(WHITE)

    # Draw the player fish
    pygame.draw.rect(screen, (0, 0, 255), (player_x, player_y, player_size, player_size))

    # Create and move small fish
    if random.randint(1, 100) < 5:
        small_fish.append([random.randint(0, WIDTH - small_fish_size), HEIGHT])
    for fish in small_fish:
        pygame.draw.rect(screen, (255, 0, 0), (fish[0], fish[1], small_fish_size, small_fish_size))
        fish[1] -= small_fish_speed

    # Check for collisions
    for fish in small_fish[:]:
        if pygame.Rect(player_x, player_y, player_size, player_size).colliderect(pygame.Rect(fish[0], fish[1], small_fish_size, small_fish_size)):
            small_fish.remove(fish)

    pygame.display.flip()
    clock.tick(FPS)

# Quit the game
pygame.quit()
