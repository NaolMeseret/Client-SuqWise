-- Safe, idempotent insert of 9 electronics products
-- Creates minimal brands/categories/stores as needed and upserts products

-- Ensure owner_store_id exists (MySQL 8+ supports IF NOT EXISTS)
ALTER TABLE products
  ADD COLUMN IF NOT EXISTS owner_store_id INT NULL AFTER category_id;

-- Ensure an electronics category exists
INSERT INTO categories (slug, name, description, is_active)
VALUES ('electronics','Electronics','General electronics category',1)
ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), is_active = VALUES(is_active);

-- Ensure brands exist (idempotent by unique slug)
INSERT INTO brands (slug, name, description, is_active)
VALUES
  ('aerosound','AeroSound','Audio and personal sound devices',1),
  ('ultrabooks','UltraBooks','Thin and light laptops',1),
  ('nexamobile','NexaMobile','Smartphone maker',1),
  ('faststorage','FastStorage','High-speed storage devices',1),
  ('proplay','ProPlay','Gaming peripherals and headsets',1),
  ('actioncamco','ActionCamCo','Action cameras and accessories',1),
  ('homelink','HomeLink','Smart home devices',1),
  ('dockworks','DockWorks','Docks and connectivity',1)
ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), is_active = VALUES(is_active);

-- Ensure a default store exists
INSERT INTO stores (domain, name, description, is_verified)
VALUES ('main.store','Main Store','Primary online store',1)
ON DUPLICATE KEY UPDATE name = VALUES(name), description = VALUES(description), is_verified = VALUES(is_verified);

-- Insert 9 electronics products. Uses SELECT to resolve fk ids and ON DUPLICATE KEY UPDATE to be safe.
INSERT INTO products (sku, title, slug, description, short_description, brand_id, category_id, owner_store_id, base_price, is_active, specifications, weight, dimensions, meta_title, meta_description, created_at, updated_at)
SELECT * FROM (
  SELECT 'PROD-E-200001' AS sku, 'Wireless Earbuds Z1' AS title, 'wireless-earbuds-z1' AS slug,
    'Wireless Earbuds Z1 full description' AS description, 'Wireless Earbuds Z1 short description' AS short_description,
    (SELECT id FROM brands WHERE slug='aerosound') AS brand_id,
    (SELECT id FROM categories WHERE slug='electronics') AS category_id,
    (SELECT id FROM stores WHERE domain='main.store') AS owner_store_id,
    99.99 AS base_price, 1 AS is_active,
    JSON_OBJECT('features', JSON_ARRAY('wireless','noise_cancellation','bluetooth 5.3'), 'color', JSON_ARRAY('black','white')) AS specifications,
    0.050 AS weight,
    JSON_OBJECT('w',20,'h',50,'d',25) AS dimensions,
    'Wireless Earbuds Z1 - Buy' AS meta_title, 'Wireless Earbuds Z1 meta description' AS meta_description,
    NOW() AS created_at, NOW() AS updated_at
  UNION ALL
  SELECT 'PROD-E-200002','Ultrabook Slim 14','ultrabook-slim-14','Ultrabook Slim 14 full description','Ultrabook Slim 14 short description', (SELECT id FROM brands WHERE slug='ultrabooks'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 1299.00,1, JSON_OBJECT('features', JSON_ARRAY('intel i7','16GB RAM','512GB SSD'),'color',JSON_ARRAY('silver')) , 1.200, JSON_OBJECT('w',310,'h',210,'d',15),'Ultrabook Slim 14 - Buy','Ultrabook Slim 14 meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200003','Nexa 5G Plus','nexa-5g-plus','Nexa 5G Plus full description','Nexa 5G Plus short description', (SELECT id FROM brands WHERE slug='nexamobile'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 799.00,1, JSON_OBJECT('features', JSON_ARRAY('5G','triple camera','OLED'),'color',JSON_ARRAY('black','blue')), 0.180, JSON_OBJECT('w',72,'h',150,'d',8),'Nexa 5G Plus - Buy','Nexa 5G Plus meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200004','Portable SSD X2','portable-ssd-x2','Portable SSD X2 full description','Portable SSD X2 short description', (SELECT id FROM brands WHERE slug='faststorage'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 149.99,1, JSON_OBJECT('features', JSON_ARRAY('NVMe','USB-C'),'color',JSON_ARRAY('black')), 0.040, JSON_OBJECT('w',70,'h',10,'d',35),'Portable SSD X2 - Buy','Portable SSD X2 meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200005','Gaming Headset R7','gaming-headset-r7','Gaming Headset R7 full description','Gaming Headset R7 short description', (SELECT id FROM brands WHERE slug='proplay'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 119.50,1, JSON_OBJECT('features', JSON_ARRAY('surround sound','mic','wireless'),'color',JSON_ARRAY('black')), 0.350, JSON_OBJECT('w',200,'h',180,'d',90),'Gaming Headset R7 - Buy','Gaming Headset R7 meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200006','4K Action Camera V3','4k-action-camera-v3','4K Action Camera V3 full description','4K Action Camera V3 short description', (SELECT id FROM brands WHERE slug='actioncamco'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 259.99,1, JSON_OBJECT('features', JSON_ARRAY('4K','waterproof','image stabilization'),'color',JSON_ARRAY('black')), 0.120, JSON_OBJECT('w',65,'h',45,'d',35),'4K Action Camera V3 - Buy','4K Action Camera V3 meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200007','Smart Home Hub S2','smart-home-hub-s2','Smart Home Hub S2 full description','Smart Home Hub S2 short description', (SELECT id FROM brands WHERE slug='homelink'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 129.00,1, JSON_OBJECT('features', JSON_ARRAY('zigbee','wifi','voice'),'color',JSON_ARRAY('white')), 0.300, JSON_OBJECT('w',110,'h',30,'d',110),'Smart Home Hub S2 - Buy','Smart Home Hub S2 meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200008','USB-C Dock Pro','usb-c-dock-pro','USB-C Dock Pro full description','USB-C Dock Pro short description', (SELECT id FROM brands WHERE slug='dockworks'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 199.00,1, JSON_OBJECT('features', JSON_ARRAY('multiport','60W PD'),'color',JSON_ARRAY('space_gray')), 0.450, JSON_OBJECT('w',230,'h',35,'d',100),'USB-C Dock Pro - Buy','USB-C Dock Pro meta description', NOW(), NOW()
  UNION ALL
  SELECT 'PROD-E-200009','Noise Cancelling Headphones N10','noise-cancelling-headphones-n10','Noise Cancelling Headphones N10 full description','Noise Cancelling Headphones N10 short description', (SELECT id FROM brands WHERE slug='aerosound'), (SELECT id FROM categories WHERE slug='electronics'), (SELECT id FROM stores WHERE domain='main.store'), 249.00,1, JSON_OBJECT('features', JSON_ARRAY('active_noise_cancelling','bluetooth'),'color',JSON_ARRAY('black')), 0.320, JSON_OBJECT('w',180,'h',220,'d',80),'Noise Cancelling Headphones N10 - Buy','Noise Cancelling Headphones N10 meta description', NOW(), NOW()
) AS tmp
ON DUPLICATE KEY UPDATE title = VALUES(title), base_price = VALUES(base_price), meta_title = VALUES(meta_title), meta_description = VALUES(meta_description), updated_at = VALUES(updated_at);
