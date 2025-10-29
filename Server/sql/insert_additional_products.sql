-- Ensure owner_store_id column exists (MySQL 8+ supports IF NOT EXISTS)
ALTER TABLE products
  ADD COLUMN IF NOT EXISTS owner_store_id INT NULL AFTER category_id;

-- Optional: if you want a FK, add it separately (may fail if lacks privileges or already exists)
-- ALTER TABLE products ADD CONSTRAINT fk_products_owner_store FOREIGN KEY (owner_store_id) REFERENCES stores(id) ON DELETE SET NULL;

-- Ensure referenced stores exist (safe upsert)
INSERT INTO stores (id, name, domain, logo_url, description, is_verified)
VALUES
  (1, 'Main Store', 'main.store', NULL, 'Primary online store', 1),
  (2, 'Outlet', 'outlet.store', NULL, 'Outlet and deals', 0),
  (3, 'Marketplace', 'market.store', NULL, 'Marketplace vendors', 1)
ON DUPLICATE KEY UPDATE name = VALUES(name), domain = VALUES(domain), description = VALUES(description);

-- Ensure referenced categories exist (ids referenced by the product inserts)
INSERT INTO categories (id, name, slug, description, is_active)
VALUES
  (4, 'Accessories', 'accessories', 'Chargers, cables, cases, and more', 1),
  (6, 'Wearables', 'wearables', 'Smartwatches and fitness bands', 1),
  (7, 'Gaming', 'gaming', 'Gaming consoles and accessories', 1),
  (8, 'Audio', 'audio', 'Speakers and audio gear', 1),
  (9, 'Drones', 'drones', 'Consumer drones and aerial cameras', 1),
  (10, 'Monitors', 'monitors', 'Computer monitors and displays', 1),
  (11, 'Televisions', 'televisions', 'Smart TVs and home entertainment', 1),
  (12, 'Projectors', 'projectors', 'Projectors and accessories', 1)
ON DUPLICATE KEY UPDATE name = VALUES(name), slug = VALUES(slug), description = VALUES(description);

-- Ensure referenced brands exist (ids referenced by the product inserts)
INSERT INTO brands (id, name, slug, description, website_url, is_active)
VALUES
  (6, 'ActiveCo', 'activeco', 'Wearable-focused brand', NULL, 1),
  (7, 'GameCore', 'gamecore', 'Gaming hardware and consoles', NULL, 1),
  (8, 'SoundWave', 'soundwave', 'Portable audio and speakers', NULL, 1),
  (9, 'SkyFly', 'skyfly', 'Drones and aerial solutions', NULL, 1),
  (10, 'VisionTech', 'visiontech', 'Displays and monitor solutions', NULL, 1),
  (11, 'PeriphCorp', 'periphcorp', 'Computer peripherals', NULL, 1),
  (12, 'KeyMasters', 'keymasters', 'Keyboards and input devices', NULL, 1),
  (13, 'TelePlus', 'teleplus', 'Smart TVs and entertainment', NULL, 1),
  (14, 'BeamWorks', 'beamworks', 'Projection and imaging products', NULL, 1)
ON DUPLICATE KEY UPDATE name = VALUES(name), slug = VALUES(slug), description = VALUES(description);

INSERT INTO products (
  id, sku, title, slug, description, short_description,
  brand_id, category_id, owner_store_id, base_price, is_active,
  specifications, weight, dimensions, warranty_information,
  return_policy, meta_title, meta_description, upc_code,
  model_number, created_at, updated_at
) VALUES
(6, 'PROD-100005', 'Smartwatch Active 105', 'smartwatch-active-105', 
 'Smartwatch Active 105 full description', 'Smartwatch Active 105 short description',
 6, 6, 3, 249.99, 1,
 '{"features":["wireless","waterproof","Bluetooth 5.2"],"color":["black","silver"]}', 
 0.150, '{"w":45,"h":45,"d":12}', NULL, NULL,
 'Smartwatch Active 105 - Buy', 'Smartwatch Active 105 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(7, 'PROD-100006', 'Gaming Console X 106', 'gaming-console-x-106', 
 'Gaming Console X 106 full description', 'Gaming Console X 106 short description',
 7, 7, 1, 599.00, 1,
 '{"features":["wireless controllers","4K support"],"color":["black","white"]}', 
 2.900, '{"w":300,"h":120,"d":60}', NULL, NULL,
 'Gaming Console X 106 - Buy', 'Gaming Console X 106 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(8, 'PROD-100007', 'Bluetooth Speaker Mini 107', 'bluetooth-speaker-mini-107', 
 'Bluetooth Speaker Mini 107 full description', 'Bluetooth Speaker Mini 107 short description',
 8, 8, 2, 79.99, 1,
 '{"features":["portable","wireless","waterproof"],"color":["blue","black"]}', 
 0.650, '{"w":90,"h":80,"d":75}', NULL, NULL,
 'Bluetooth Speaker Mini 107 - Buy', 'Bluetooth Speaker Mini 107 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(9, 'PROD-100008', 'Drone Air 108', 'drone-air-108', 
 'Drone Air 108 full description', 'Drone Air 108 short description',
 9, 9, 3, 999.99, 1,
 '{"features":["4K camera","wireless control","GPS tracking"],"color":["white","gray"]}', 
 1.200, '{"w":180,"h":60,"d":180}', NULL, NULL,
 'Drone Air 108 - Buy', 'Drone Air 108 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(10, 'PROD-100009', 'Monitor Vision 109', 'monitor-vision-109', 
 'Monitor Vision 109 full description', 'Monitor Vision 109 short description',
 10, 10, 1, 320.49, 1,
 '{"features":["LED display","HDMI support"],"color":["black","silver"]}', 
 3.100, '{"w":540,"h":320,"d":55}', NULL, NULL,
 'Monitor Vision 109 - Buy', 'Monitor Vision 109 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(11, 'PROD-100010', 'Wireless Mouse 110', 'wireless-mouse-110', 
 'Wireless Mouse 110 full description', 'Wireless Mouse 110 short description',
 11, 4, 2, 29.90, 1,
 '{"features":["ergonomic","Bluetooth connectivity"],"color":["black","gray"]}', 
 0.120, '{"w":65,"h":40,"d":30}', NULL, NULL,
 'Wireless Mouse 110 - Buy', 'Wireless Mouse 110 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(12, 'PROD-100011', 'Keyboard Ultra 111', 'keyboard-ultra-111', 
 'Keyboard Ultra 111 full description', 'Keyboard Ultra 111 short description',
 12, 4, 3, 54.80, 1,
 '{"features":["mechanical","RGB lighting"],"color":["black","white"]}', 
 0.980, '{"w":450,"h":35,"d":130}', NULL, NULL,
 'Keyboard Ultra 111 - Buy', 'Keyboard Ultra 111 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(13, 'PROD-100012', 'Smart TV 4K 112', 'smart-tv-4k-112', 
 'Smart TV 4K 112 full description', 'Smart TV 4K 112 short description',
 13, 11, 2, 1149.00, 1,
 '{"features":["4K resolution","Smart OS","Bluetooth"],"color":["black","gray"]}', 
 8.500, '{"w":1220,"h":700,"d":80}', NULL, NULL,
 'Smart TV 4K 112 - Buy', 'Smart TV 4K 112 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50'),

(14, 'PROD-100013', 'Projector Beam 113', 'projector-beam-113', 
 'Projector Beam 113 full description', 'Projector Beam 113 short description',
 14, 12, 1, 589.50, 1,
 '{"features":["HD projection","Wi-Fi connectivity"],"color":["white","black"]}', 
 2.000, '{"w":180,"h":120,"d":200}', NULL, NULL,
 'Projector Beam 113 - Buy', 'Projector Beam 113 meta description', NULL, NULL,
 '2025-10-27 13:46:50', '2025-10-27 13:46:50');
