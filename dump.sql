/*
 Navicat Premium Data Transfer

 Source Server         : abc
 Source Server Type    : Oracle
 Source Server Version : 190000
 Source Host           : localhost:1521
 Source Schema         : ANWAR

 Target Server Type    : Oracle
 Target Server Version : 190000
 File Encoding         : 65001

 Date: 25/02/2022 03:50:35
*/


-- ----------------------------
-- Table structure for CATEGORIES
-- ----------------------------
DROP TABLE "ANWAR"."CATEGORIES";
CREATE TABLE "ANWAR"."CATEGORIES" (
  "CATEGORY_ID" NUMBER VISIBLE NOT NULL,
  "CATEGORY_NAME" VARCHAR2(1024 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of CATEGORIES
-- ----------------------------
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('9', 'Dessert');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('10', 'Biryani');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('3', 'Pizza');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('4', 'Breakfast');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('5', 'Soup');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('8', 'Stew');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('7', 'Noodles');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('1', 'Chicken');
INSERT INTO "ANWAR"."CATEGORIES" VALUES ('2', 'Burger');

-- ----------------------------
-- Table structure for FAVOURITES
-- ----------------------------
DROP TABLE "ANWAR"."FAVOURITES";
CREATE TABLE "ANWAR"."FAVOURITES" (
  "USER_ID" NUMBER VISIBLE,
  "RECIPE_ID" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of FAVOURITES
-- ----------------------------
INSERT INTO "ANWAR"."FAVOURITES" VALUES ('942', '21');

-- ----------------------------
-- Table structure for INGREDIENTS
-- ----------------------------
DROP TABLE "ANWAR"."INGREDIENTS";
CREATE TABLE "ANWAR"."INGREDIENTS" (
  "INGREDIENTS_ID" NUMBER VISIBLE NOT NULL,
  "INGREDIENTS_NAME" VARCHAR2(1024 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of INGREDIENTS
-- ----------------------------
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('76', 'cocoa');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('105', 'Mozzarella');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('111', 'goat meat');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('112', 'canola oil');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('113', 'a');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('1', 'chicken breast');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('2', 'cayenne pepper');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('3', 'salt');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('4', 'butter');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('5', 'parsley');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('6', 'water');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('7', 'lemon juice');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('8', 'white wine');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('9', 'capers');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('10', 'olive oil');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('11', 'white sugar');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('12', 'flour');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('13', 'Parmesan cheese');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('14', 'cantanzaro herb');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('15', 'garlic salt');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('16', 'black pepper');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('17', 'beef');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('18', 'Worcestershire sauce');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('19', 'Italian bread crumbs');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('20', 'steak sauce');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('21', 'Cheddar cheese');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('22', 'buns');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('23', 'onion');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('24', 'dried basil');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('25', 'tomatoes');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('26', 'ricotta cheese');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('27', 'Parmesan cheese');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('28', 'white sugar');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('29', 'milk');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('30', 'egg');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('31', 'baking powder');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('32', 'celery');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('33', 'carrot');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('34', 'potatoes');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('35', 'butternut squash');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('36', 'chicken stock');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('37', 'cinnamon');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('38', 'vanilla');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('39', 'chorizo sausage');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('40', 'corn tortillas');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('41', 'Monterey Jack cheese');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('42', 'pepper sauce');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('43', 'salsa');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('44', 'quinoa');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('45', 'blueberries');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('46', 'flax seed');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('47', 'maple syrup');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('48', 'black pepper');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('49', 'cayenne pepper');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('50', 'paprika');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('51', 'bacon');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('52', 'Swiss cheese');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('53', 'rolled oats');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('54', 'banana');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('55', 'strawberries');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('56', 'vanilla extract');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('57', 'horseradish');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('58', 'tomato-vegetable');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('59', 'pepper sauce');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('60', 'Worcestershire sauce');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('61', 'celery salt');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('62', 'lengthwise');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('63', 'ginger');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('64', 'peppercorns');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('65', 'cornstarch');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('66', 'cold water');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('67', 'celery');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('68', 'carrots');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('71', 'meat');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('72', 'beef broth');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('73', 'tomato');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('74', 'ginger');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('75', 'ice');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('77', 'leek');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('78', 'carrot');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('79', 'fresh ginger');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('80', 'black peppercorns');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('81', 'chicken breast');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('82', 'flour');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('83', 'salt');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('84', 'eggs, beaten');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('85', 'butter');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('86', 'milk');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('87', 'chicken bouillon cubes, crumbled');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('88', 'chopped fresh ginger');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('89', ' peeled and sliced carrot');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('90', 'sliced celery');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('91', 'cornstarch');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('92', 'cold water');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('93', 'wide egg noodles');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('94', 'vegetable oil');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('95', 'chicken broth');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('96', 'salt');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('97', 'poultry seasoning');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('98', 'chopped celery');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('99', 'chopped onion');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('100', '	cornstarch');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('108', 'c');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('109', 'd');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('110', 'e');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('106', 'cooking apples');
INSERT INTO "ANWAR"."INGREDIENTS" VALUES ('107', 'b');

-- ----------------------------
-- Table structure for INGREDIENTS_LIST
-- ----------------------------
DROP TABLE "ANWAR"."INGREDIENTS_LIST";
CREATE TABLE "ANWAR"."INGREDIENTS_LIST" (
  "RECIPE_ID" NUMBER VISIBLE,
  "AMOUNT" VARCHAR2(255 BYTE) VISIBLE,
  "INGREDIENT_LIST_ID" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of INGREDIENTS_LIST
-- ----------------------------
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('19', '2/3 cup', '12');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('19', '1/2 teaspoon', '31');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('19', '1/2 cup', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('19', '1/2 cup', '76');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('19', '3/4 teaspoon', '38');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('20', '3 cups', '12');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('20', '1 1/2 teaspoon', '3');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('20', '5 oz', '25');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('20', '1/4 teaspoon', '10');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('20', '2 ounces', '105');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('22', '5 lbs', '111');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('22', '2 tablespoons', '112');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('22', '1', '113');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('22', '2', '107');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('22', '3', '108');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	4		', '2');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	1		', '3');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	1		', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	3 tablespoon', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	2 tablespoon', '6');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	1/4 cup		', '7');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '1/4 cup	', '8');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	1/2 cup	', '9');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	1		', '10');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('2', '	1		', '11');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	4		', '2');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1		', '3');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1 teaspoon', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1/4 cup	', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', ' 1/2 cup	', '13');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1/2 cup	', '11');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1/4 cup	', '14');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1 teaspoon', '15');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1 teaspoon', '16');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('3', '	1/2 teaspoon', '17');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('4', '	1 pound		', '18');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('4', '	1/4 cup	', '19');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('4', '	1/4 cup	', '20');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('4', '	1/2 tablespoon', '21');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('4', '	4 slice		', '22');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('4', '	4 hamburger', '23');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('5', '	2 tablespoon', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('5', '	2 tablespoon', '24');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('5', '	1/2 tablespoon', '25');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('5', '	2 roma(plum)	', '26');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('5', '	1/2 cup		', '27');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('5', '	1/4 cup	', '28');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('6', '	1 teaspoon', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('6', '	2.5 cups', '13');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('6', '	1 tablespoon', '29');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('6', '	3 tablespoon', '11');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('6', '	1 cup warm', '7');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('18', '8-10', '34');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('18', '2 stalks', '32');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('18', '3 lbs', '71');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('18', '10 3⁄4 ounces', '72');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('18', '1/2 teaspoon', '16');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('7', '	3 tablespoon	', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('7', '	1.25 cups		', '30');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('7', '	1			', '31');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('7', '	3.5 teaspoon	', '32');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('7', '	1.5 cups		', '13');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('7', '	1/4 teaspoon	', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1			', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1 stalk			', '33');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1 medium		', '34');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	2 medium		', '35');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1 medium		', '36');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1 container		', '37');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1 small			', '24');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('8', '	1			', '49');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	1 cup			', '30');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	3			', '31');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	1 pinch		', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	1/4 cup		', '13');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	1/2 teaspoon	', '38');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	1 teaspoon		', '12');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '12 thick slice	', '71');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('9', '	1 teaspoon		', '57');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('11', '	1 pinch		', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('11', '	1			', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('11', '	2 cups nonfat	', '30');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('11', '	1 cup			', '45');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('11', '	1 cup			', '46');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('12', '	5 teablespoons	', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('12', '	2 russet		', '35');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('12', '	1				', '49');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('12', '	1 pinch			', '50');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('12', '	1 pinch			', '51');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	4				', '31');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	1/4 cup chopped', '24');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	1 teaspoon		', '4');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	1/2 cup			', '13');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	1.5 cups		', '30');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	2 teaspoons		', '5');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	8 slices		', '52');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('13', '	4 ounces shredded', '53');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('14', '1.5 teaspoons	', '28');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('14', '1 cup soy milk	', '29');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('14', '1.5 cup		', '53');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('14', '1 piece 		', '54');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('14', '14 pieces 		', '55');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('14', '1.5 cup		', '71');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '1 tablespoons	', '7');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '10.5 ounce		', '17');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '1 tablespoon	', '48');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '1 tablespoon	', '3');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '1 tablespoon	', '42');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '3 tablespoon	', '60');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('15', '1 piece		', '58');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('16', '2 fluid ounces	', '73');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('16', '4 fluid ounces	', '74');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('16', '0.5 cup		', '75');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1 piece		', '77');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1 piece		', '78');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1 piece		', '79');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1 tablespoon	', '80');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '2 bones 		', '81');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '2.5 cups		', '82');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '0.125 teaspoon	', '83');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '2 pieces		', '84');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1 tablespoon	', '85');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1/3 cup		', '86');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '2 pieces		', '87');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '3 tablespoons 	', '88');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '0.75 cup		', '89');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '1 cup 			', '90');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '0.25 cup		', '91');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('17', '0.25 cup		', '92');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('21', '1', '106');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('21', '2', '107');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('21', '3', '108');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('21', '4', '109');
INSERT INTO "ANWAR"."INGREDIENTS_LIST" VALUES ('21', '5', '110');

-- ----------------------------
-- Table structure for KEYWORDS
-- ----------------------------
DROP TABLE "ANWAR"."KEYWORDS";
CREATE TABLE "ANWAR"."KEYWORDS" (
  "RECIPE_ID" NUMBER VISIBLE NOT NULL,
  "KEYWORD" VARCHAR2(255 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of KEYWORDS
-- ----------------------------
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('11', 'Popular');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('12', 'Popular');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('13', 'Popular');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('14', 'Popular');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('2', 'healthy');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('3', 'healthy');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('4', 'spicy');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('5', 'spicy');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('6', 'spicy');
INSERT INTO "ANWAR"."KEYWORDS" VALUES ('1', 'quick');

-- ----------------------------
-- Table structure for NUTRITION_INFO
-- ----------------------------
DROP TABLE "ANWAR"."NUTRITION_INFO";
CREATE TABLE "ANWAR"."NUTRITION_INFO" (
  "RECIPE_ID" NUMBER VISIBLE NOT NULL,
  "PROTEIN" NUMBER VISIBLE,
  "CARBOHYDRATE" NUMBER VISIBLE,
  "CHOLESTEROL" NUMBER VISIBLE,
  "FAT" NUMBER VISIBLE,
  "CALORIES" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of NUTRITION_INFO
-- ----------------------------
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('19', '2.1', '15.2', '44', '7.9', '138.9');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('8', '6.9', '59.7', '20.9', '6.8', '305');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('9', '4.8', '19.4', '48.1', '2.7', '123');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('11', '21.5', '98.7', '4.9', '7.3', '538');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('12', '4.4', '37.5', '49.2', '19.4', '334');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('13', '17', '12.9', '169.8', '18.8', '291');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('14', '7.6', '44.9', '0', '3.7', '236');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('15', '1.7', '1.7', '0', '0.1', '45');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('16', '0', '10.5', '0', '0', '180');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('17', '12.6', '37.2', '68.1', '4.1', '240');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('20', '122', '229', '100', '131', '432');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('22', '11', '2', '3', '4', '4');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('1', '24.7', '8.4', '87.5', '18.2', '321');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('2', '28', '17.8', '100.3', '16', '334');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('3', '5', '17.5', '27.4', '2.9', '137');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('4', '30.4', '30.5', '99.4', '31.3', '533');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('5', '5', '17.5', '0', '2.9', '137');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('6', '3', '21.2', '0', '3.7', '131');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('7', '4.5', '21.7', '37.7', '5.9', '158');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('18', '36.5', '45', '87.1', '9.5', '412');
INSERT INTO "ANWAR"."NUTRITION_INFO" VALUES ('21', '1', '1', '3', '4', '5');

-- ----------------------------
-- Table structure for RECIPES
-- ----------------------------
DROP TABLE "ANWAR"."RECIPES";
CREATE TABLE "ANWAR"."RECIPES" (
  "RECIPE_ID" NUMBER VISIBLE NOT NULL,
  "RECIPE_TITLE" VARCHAR2(255 BYTE) VISIBLE,
  "PHOTO_URL" VARCHAR2(255 BYTE) VISIBLE,
  "INFORMATION_ID" NUMBER VISIBLE,
  "CATEGORY_ID" NUMBER VISIBLE,
  "REGION_ID" VARCHAR2(20 BYTE) VISIBLE,
  "TIME_REQUIRED" VARCHAR2(255 BYTE) VISIBLE,
  "CONTRIBUTOR_ID" NUMBER VISIBLE NOT NULL,
  "SERVINGS" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of RECIPES
-- ----------------------------
INSERT INTO "ANWAR"."RECIPES" VALUES ('19', 'Cream Cheese Brownies!', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/36/62/7/19qbdcEnTIGsTq94IQZO_classic-cream-cheese-brownies%20(4%20of%204).jpg', '19', '9', 'AU', '1hr 15', '94', '1');
INSERT INTO "ANWAR"."RECIPES" VALUES ('20', 'No Knead Pizza Margherita', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_628,h_354/v1/img/recipes/38/26/96/WW42zdf3SqiQ13mzb97U_0S9A9717.jpg', '20', '3', 'IT', '1 hour 10', '94', '4');
INSERT INTO "ANWAR"."RECIPES" VALUES ('22', 'THE BEST BIRYANI', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/17/78/30/ovCLuzI5Qi2EwP1Bq4Yp_0S9A4303.jpg', '22', '10', 'BD', '50', '943', '4');
INSERT INTO "ANWAR"."RECIPES" VALUES ('2', 'Quick Chicken Piccata', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F09%2F10%2F220751-quick-chicken-piccata-tout-2000.jpg', '1', '1', 'CA', '15', '2', '25');
INSERT INTO "ANWAR"."RECIPES" VALUES ('3', 'Oven-Baked Chicken Piccata', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6640312.jpg', '2', '1', 'AU', '1', '2', '4');
INSERT INTO "ANWAR"."RECIPES" VALUES ('4', 'Mo Bros Burgers', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F6310095.jpg', '4', '2', 'AU', '20', '2', '20');
INSERT INTO "ANWAR"."RECIPES" VALUES ('5', 'Chicken Garlic Pizza', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F4272.jpg', '5', '3', 'AU', '20', '3', '35');
INSERT INTO "ANWAR"."RECIPES" VALUES ('6', 'Valentinos Pizza Crust', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2334369.jpg', '6', '3', 'NL', '20', '3', '35');
INSERT INTO "ANWAR"."RECIPES" VALUES ('7', 'Good Old Fashioned Pancakes', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F05%2F07%2FGood-Old-Fashioned-Pancakes-2000.jpg', '7', '4', 'DE', '20', '2', '20');
INSERT INTO "ANWAR"."RECIPES" VALUES ('8', 'Butternut Squash Soup', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F10%2F08%2F77981-butternut-squash-soup-ii-tout-AR.jpg', '7', '5', 'CA', '20', '2', '25');
INSERT INTO "ANWAR"."RECIPES" VALUES ('18', 'Guinness Beef Stew in a Crock Pot', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/25/99/13/7Eq4AoJFRsubWlrrzAgy_guinness%20beef%20stew%20(4%20of%204).jpg', '18', '8', 'US', '480', '94', '10');
INSERT INTO "ANWAR"."RECIPES" VALUES ('11', 'Blueberry Lemon Breakfast Quinoa', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F958126.jpg															', '10', '4', 'CA', '30', '2', '25');
INSERT INTO "ANWAR"."RECIPES" VALUES ('12', 'Classic Hash Browns', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2021%2F10%2F27%2FClassic-Hash-Browns-2000.jpg		', '11', '4', 'CA', '20', '3', '20');
INSERT INTO "ANWAR"."RECIPES" VALUES ('13', 'Quick Quiche', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F399957.jpg														', '12', '4', 'CA', '50', '2', '20');
INSERT INTO "ANWAR"."RECIPES" VALUES ('14', 'Strawberry Oatmeal Breakfast Smoothie', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F409456.jpg														', '13', '4', 'CA', '5', '4', '5');
INSERT INTO "ANWAR"."RECIPES" VALUES ('15', 'Bloody Mary Mix', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F2206385.jpg														', '14', '4', 'BD', '485', '4', '5');
INSERT INTO "ANWAR"."RECIPES" VALUES ('16', 'SPICED TOMATO JUICE', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/11/01/56/piccfT2Od.jpg', '15', '4', 'BD', '5', '4', '5');
INSERT INTO "ANWAR"."RECIPES" VALUES ('17', 'Comforting Chicken Noodle Soup', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8682753.jpg													', '16', '4', 'BD', '105', '4', '5');
INSERT INTO "ANWAR"."RECIPES" VALUES ('1', 'SPAGHETTI WITH ZUCCHINI AND GARLIC', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_562,h_316/v1/img/recipes/70/75/5/CvV5S1RReOYcwbpfINmw_0S9A3005.jpg', '3', '7', 'MX', '20', '2', '4');
INSERT INTO "ANWAR"."RECIPES" VALUES ('9', 'Fluffy French Toast', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F02%2Ffluffy-french-toast.jpg							', '8', '4', 'CA', '30', '3', '20');
INSERT INTO "ANWAR"."RECIPES" VALUES ('21', 'Dutch Apple Pie', 'https://img.sndimg.com/food/image/upload/c_thumb,q_80,w_569,h_320/v1/img/recipes/43/99/0/HU5zyewQxK5MaSSkLyMt_0S9A5753.jpg', '21', '9', 'NL', '60', '942', '8');

-- ----------------------------
-- Table structure for RECIPE_INFO
-- ----------------------------
DROP TABLE "ANWAR"."RECIPE_INFO";
CREATE TABLE "ANWAR"."RECIPE_INFO" (
  "INFORMATION_ID" NUMBER VISIBLE NOT NULL,
  "DESCRIPTION" VARCHAR2(1024 BYTE) VISIBLE,
  "STEPS" VARCHAR2(2048 BYTE) VISIBLE,
  "REVIEW_SUMMARY_ID" NUMBER VISIBLE NOT NULL,
  "VIDEO_URL" VARCHAR2(1048 BYTE) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of RECIPE_INFO
-- ----------------------------
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('19', 'Brownies', 'Preheat oven to 350 degrees F.     Stir together flour, salt and baking powder.     Melt butter and remove from heat.     Stir in the cocoa.     Beat in the eggs, sugar and the vanilla.     Fold in the dry ingredients.     Pour in 1/2 the batter in a 9" greased square casserole dish or baking pan.     Spread Cream Cheese Filling on top CAREFULLY!     Top with remaining chocolate batter.     Pull a knife through all of the layers to create a marbled effect.     Bake covered with tin foil or a glass lid for 40-45 minutes or until a toothpick inserted into the brownies comes out clean.     Cream Cheese Filling: Beat the cream cheese.     Gradually add the 1/3 cup sugar, 1 egg and the 1/2 tsp vanilla until the filling is very smooth.', '19', 'link');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('11', 'Sweet blueberries and tart lemon pair well in this alternative to oatmeal. High in protein and fiber, quinoa is a great start to your day! I made this up one morning when I had a craving for quinoa and was looking for a change from the usual. Top with extra milk for a thinner consistency. Also good with a sprinkle of cinnamon or nutmeg', 'Step-1: Rinse quinoa in a fine strainer with cold water to remove bitterness until water runs clear and is no longer frothy. Step-2: Heat milk in a saucepan over medium heat until warm, 2 to 3 minutes. Stir quinoa and salt into the milk; simmer over medium-low heat until much of the liquid has been absorbed, about 20 minutes. Remove saucepan from heat. Stir maple syrup and lemon zest into the quinoa mixture. Gently fold blueberries into the mixture. Step-3: Divide quinoa mixture between 2 bowls; top each with 1 teaspoon flax seed to serve.', '11', 'https://www.youtube.com/watch?v=LRPHrQHJm2c');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('12', 'These classic diner-style hash browns are crispy on the outside and fluffy on the inside.', 'Step-1: Shred potatoes into a large bowl filled with cold water. Stir until water is cloudy, drain, and cover potatoes again with fresh cold water. Stir again to dissolve excess starch. Drain potatoes well, pat dry with paper towels, and squeeze out any excess moisture. Step-2: Heat clarified butter in a large non-stick pan over medium heat. Sprinkle shredded potatoes into the hot butter and season with salt, black pepper, cayenne pepper, and paprika. Step-3: Cook potatoes until a brown crust forms on the bottom, about 5 minutes. Continue to cook and stir until potatoes are browned all over, about 5 more minutes.', '12', 'https://www.allrecipes.com/recipe/220520/classic-hash-browns/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('13', 'When you don t have the time to make a pastry crust, try this quick lunch idea. You may add any other goodies you like, such as ham, chicken, crab, shrimp or broccoli.', 'step-1:Place bacon in a large, deep skillet. Cook over medium high heat until evenly brown. Drain, crumble and set aside. step-2:Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9 inch pie pan. step-3:Line bottom of pie plate with cheese and crumbled bacon. Combine eggs, butter, onion, salt, flour and milk whisk together until smooth; pour into pie pan. step-4: Bake in preheated oven for 35 minutes, until set. Serve hot or cold.   ', '13', 'https://www.allrecipes.com/recipe/21551/quick-quiche/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('14', 'This is a fast vegan smoothie with a deep pink color and a rich, creamy texture. VERY filling, and perfect for people in a rush in the morning. You dont have to give up a good breakfast when its this fast to make! I use vitamin fortified soy milk.', 'Step-1: In a blender, combine soy milk, oats, banana and strawberries. Add vanilla and sugar if desired. Blend until smooth. Pour into glasses and serve.', '14', 'https://www.allrecipes.com/recipe/23539/strawberry-oatmeal-breakfast-smoothie/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('15', 'My father-in-law first introduced me to this homemade bloody mary mix. It is very similar to what you d buy in a store. Made as is, it is very spicy. You can customize it to your taste by cutting back on the pepper and hot sauce; I like about half the pepper and hot sauce. Enjoy this wonderful mix! It is so easy and much cheaper than buying pre-made mix.', 'Step-1: In a large pitcher, combine juice cocktail, lemon juice and brown sugar. Season with Worcestershire sauce, horseradish, hot sauce and celery salt. Cover, and refrigerate 8 to 12 hours to allow flavors to meld.', '15', 'https://www.allrecipes.com/recipe/222547/dark-n-stormy-cocktail/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('16', 'My father-in-law first introduced me to this homemade bloody mary mix. It is very similar to what youd buy in a store. Made as is, it is very spicy. You can customize it to your taste by cutting back on the pepper and hot sauce; I like about half the pepper and hot sauce. Enjoy this wonderful mix! It is so easy and much cheaper than buying pre-made mix.', 'Step-1: Combine rum and ginger beer in an old-fashioned glass. Add ice and stir.', '16', 'https://www.youtube.com/watch?v=2EZBGowe0ho');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('17', 'A combination of several recipes Ive made over the years to make this warm, comforting soup. Great for warm days, sick days, or just any day. I sometimes serve this with mashed potatoes as well! The more flour on the pasta from rolling it out, the thicker your soup will be.', 'step-1:Pour 10 cups of water into a large soup pot over high heat with the leek, halved carrot, 3-inch piece of ginger, and peppercorns.Step-2: Bring to a boil, turn heat to medium-low, and place chicken breasts into the broth Step-3: Cover the pot with a lid and simmer the mixture until the chicken is cooked through and tender, 20 to 30 minutes. Step-4:While broth is simmering, whisk flour and salt together in a bowl; beat in the eggs, butter, and enough milk to make a stiff but workable dough. Step-5: Knead the dough in the bowl until smooth and slightly springy, about 5 minutes; transfer to a bowl, cover with a cloth, and allow to rest for 10 minutes. Step-6: Roll the noodle dough out on a floured surface to desired thickness (1/4- to 1/8-inch thick); cut into strips. Step-7:Remove chicken breasts, transfer them to a plate, and allow to cool. When cool, remove the bones and shred the meat with a fork. Step-8: Place strained broth into a large soup pot, bring to a boil, and reduce heat to medium-low. Stir in bouillon cubes, 3 tablespoons of chopped ginger, 3/4 cup sliced carrots, and celery until the bouillon has dissolved. Simmer until the carrots are tender, about 30 minutes. Step-9:Gently stir in the noodles, a few at a time. Return broth to a simmer and cook until the noodles are tender, about 10 minutes. Step-10: Whisk cornstarch and 1/4 cup of water until smooth; stir half the mixture into the soup and simmer until thickened, about 3 minutes. If thicker soup is desired, stir in remaining cornstarch mixture. Mix in the chicken to serve.', '17', 'https://www.youtube.com/watch?v=o91gT73mQhg');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('5', 'THIS IS DESCRIPTION', 'step-1: Stir water, sugar and yeast together until dissolved. Add the olive oil and the salt. Stir in the flour until well blended. Let dough rest for 10 minutes. Step-2: Pat dough into pan or on to a pizza stone using fingers dipped in olive oil. If desired sprinkle basil, thyme or other seasonings on crust. Top with your favorite pizza toppings and bake for 15 to 20 minutes in a preheated 425 degree oven. Step-3:', '5', 'https://www.youtube.com/watch?v=sH-juTnjm-Y');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('6', 'THIS IS DESCRIPTION', 'Step-1: In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Step-2: Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot. Step-3:', '6', 'https://www.youtube.com/watch?v=sH-juTnjm-Y');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('7', 'THIS IS DESCRIPTION', 'Step-1: Melt the butter in a large pot, and cook the onion, celery, carrot, potatoes, and squash 5 minutes, or until lightly browned. Pour in enough of the chicken stock to cover vegetables. Bring to a boil. Reduce heat to low, cover pot, and simmer 40 minutes, or until all vegetables are tender. Step-2: Transfer the soup to a blender, and blend until smooth. Return to pot, and mix in any remaining stock to attain desired consistency. Season with salt and pepper.', '7', 'https://www.youtube.com/watch?v=sH-juTnjm-Y');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('8', 'THIS IS DESCRIPTION', 'Step-1: Melt the butter in a large pot, and cook the onion, celery, carrot, potatoes, and squash 5 minutes, or until lightly browned. Pour in enough of the chicken stock to cover vegetables. Bring to a boil. Reduce heat to low, cover pot, and simmer 40 minutes, or until all vegetables are tender. Step-2: Transfer the soup to a blender, and blend until smooth. Return to pot, and mix in any remaining stock to attain desired consistency. Season with salt and pepper.', '8', 'https://www.youtube.com/watch?v=sH-juTnjm-Y');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('10', 'Quick Easy and Delicious! I learned this recipe from many years of eating with the Mexican cooks at my restaurant. They like to sneak in breakfast before we open. Ive grown to LOVE this breakfast. If you like spicy food, you will love this', 'step-1: Crumble the sausage into a skillet over medium-high heat. Cook and stir until evenly brown. Set aside. Step-2: Heat one skillet over medium heat, and heat another skillet over high heat. The skillet over high heat is for warming tortillas. In a medium bowl, whisk together the eggs, milk, salt and pepper. Spray the medium heat skillet with some cooking spray, and pour in the eggs. Cook and stir until almost firm. Add the sausage, and continue cooking and stirring until firm. Step-3: Meanwhile, warm tortillas for about 45 seconds per side in the other skillet, so they are hot and crispy on the edges, but still pliable. Step-4: Sprinkle a little shredded cheese onto each tortilla while it is still hot. Top with some of the scrambled egg and sausage, then add hot pepper sauce and salsa to your liking.', '10', 'https://www.youtube.com/watch?v=j0gjlSgO7VU');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('18', 'Beef Stew', 'Put potato, carrot, and celery chunks in the bottom of crock pot. Top with 2 bay leaves. Season flour with a dash of salt, pepper and garlic powder and coat the beef with the flour mixture. Heat a couple of tbsp of olive oil over med-high heat in a large skillet and add 1 bay leaf. Sauté beef in batches, just until browned.(It took me about 3 batches in a 12" skillet). Add more oil to pan as necessary for each batch. Remove and set aside. Add onion and garlic to the same pan and sauté over med heat for a few minutes, then add about half the can of beef broth to deglaze, scraping up the brown bits on the bottom of the pan. (That@s Flavor!). Add meat and onions to crock pot, top with mushrooms. Mix remaining beef broth with tomato sauce, onion soup mix, remaining seasonings, and add to crock pot. Pour in most of bottle of beer (whatever fits, I had a few sips left for me). Cook 8 hours on low heat. Stir in frozen peas when done, they@ll heat up on their own. Serve with crusty French bread!', '18', 'link');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('20', 'This is a great recipe for a simple, thin crust pizza. Its from Jim Lahey (of no-knead bread fame) who now runs a popular NYC pizzeria called Co. The recipe was printed in New York Magazine (Jul 12, 2009). If you dont have a pizza stone, this works well in a cast iron skillet. The recipe requires very little time and effort but the dough must be started the day before.', 'To make dough: In a large bowl, mix the flour, yeast, and salt. Add water and stir until blended (the dough will be very sticky). Cover with plastic wrap and let rest for 12 to 24 hours in a warm spot, about 70 degrees. Place the dough on a lightly floured work surface and sprinkle the top with flour. Fold the dough over on itself once or twice, cover loosely with plastic wrap, and let rest for 15 minutes. Shape the dough into 3 or 4 balls, depending on how thick you want the crust. Generously sprinkle a clean cotton towel with flour and cover the dough with it. Let the dough rise for 2 hours. To make sauce: Blanch tomato for 5 seconds in boiling water and quickly remove. Allow to cool to the touch. Peel the skin with your hands and quarter the tomato. Remove the jelly and seeds, and reserve in a strainer or fine sieve. Strain the jelly to remove seeds, and combine resulting liquid in a bowl with the flesh of the tomatoes. Proceed to crush the tomatoes with your hands. Add salt and olive oil and stir.', '20', 'link');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('22', 'this is description', 'Soak rice for half an hour. Cook in rice cooker with 15 cups of water. Cook rice until almost done. Fry onions in oil until golden brown. Add ginger and garlic. Add chili powder, cloves, cardamom, pepper corn, cumin, curry, graham masala, coriander, cinnamon stick, bay leaves, dried plums, and salt. Add yogurt. Add tomatoes and cook until dry. Add meat. Add green chiles. Cook until meat is done and add water if needed. Add cilantro. Mix saffron with hot water. Layer rice and meat mixture and sprinkle with saffron mixture. Put in oven at 350°F for 20 minutes.', '22', 'link');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('3', 'this is description', '5 steps', '12', 'https://www.youtube.com/watch?v=DWeVcmVwG2M');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('1', 'THIS IS DESCRIPTION', 'Step-1: Place chicken breasts between 2 layers of plastic wrap and pound to about 1/2-inch thick. Step-2:Season both sides of chicken breasts with cayenne, salt, and black pepper; dredge lightly in flour and shake off any excess. Step-3:Heat olive oil in a skillet over medium-high heat. Place chicken in the pan, reduce heat to medium, and cook until browned and cooked through, about 5 minutes per side; remove to a plate. Step-4:Cook capers in reserved oil, smashing them lightly to release brine, until warmed though, about 30 seconds. Step-5: Pour white wine into skillet. Scrape any browned bits from the bottom of the pan with a wooden spoon. Cook until reduced by half, about 2 minutes. Step-6: Stir lemon juice, water, and butter into the reduced wine mixture; cook and stir continuously to form a thick sauce, about 2 minutes. Reduce heat to low and stir parsley through the sauce. Step-7:Return chicken breasts to the pan cook until heated through, 1 to 2 minutes. Serve with sauce spooned over the top.', '1', 'https://www.allrecipes.com/recipe/220751/quick-chicken-piccata/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('2', 'THIS IS DESCRIPTION', 'Step-1:  Preheat the oven to 400 degrees F (200 degrees C). Add butter to a large cast iron skillet and place into the oven to allow butter to melt - careful not to burn the butter. Step-2: In a shallow dish combine flour, Parmesan cheese, cantanzaro herbs, and 1/2 teaspoon garlic salt. Mix to combine. Step-3: Season chicken with remaining 1/2 teaspoon garlic salt and black pepper. Dredge in the flour mixture to coat evenly. Step-4: Carefully remove the skillet from the oven using oven mitts and mix bone broth and lemon juice into the melted butter. Place the flour-seasoned chicken breasts in the skillet and sprinkle with capers. Spoon some of the melted mutter mixture over the chicken. Step-5: Return skillet to the oven and bake until chicken is no longer pink in the center and the juices run clear, 25 to 30 minutes. If the skillet liquid evaporates too quickly, add additional bone broth and lemon juice. Step-6: Set an oven rack about 6 inches from the heat source and preheat the ovens broiler. Carefully pour wine into the bottom of the skillet. Broil chicken until lightly browned on top. Spoon the sauce over the chicken. Garnish with lemon slices.', '2', 'https://www.allrecipes.com/recipe/220751/quick-chicken-piccata/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('4', 'THIS IS DESCRIPTION', 'Step-1: Preheat an outdoor grill for medium-high heat and lightly oil the grate. Step-2: Mix ground beef, Worcestershire sauce, bread crumbs, steak sauce, and liquid smoke together in a bowl using your hands. Form mixture into 4 hamburger patties. Step-3: Grill burgers for 5 minutes on the preheated grill. Flip and grill to your desired degree of doneness, about 4 minutes. An instant-read thermometer inserted into the center should read at least 160 degrees F (70 degrees C). step-4: Remove burgers from grill and cover each with a slice of Cheddar cheese. Allow to rest and serve on hamburger buns..', '4', 'https://www.allrecipes.com/recipe/220751/quick-chicken-piccata/');
INSERT INTO "ANWAR"."RECIPE_INFO" VALUES ('21', 'One of the best dutch apple pies youll eat!', 'Fit pie crust into pie plate.  In a large bowl, mix sliced apples, lemon juice, both sugars,flour, cinnamon and nutmeg. Pile into crust. Prepare topping:  In a medium bowl, with a pastry blender or a fork, mix flour, both sugars, and butter until coarsely crumbled. Sprinkle evenly over apples.  Bake at 375°F for 50 minutes.', '21', 'link');

-- ----------------------------
-- Table structure for REGION
-- ----------------------------
DROP TABLE "ANWAR"."REGION";
CREATE TABLE "ANWAR"."REGION" (
  "REGION_ID" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "REGION_NAME" VARCHAR2(1024 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of REGION
-- ----------------------------
INSERT INTO "ANWAR"."REGION" VALUES ('AR', 'Argentina');
INSERT INTO "ANWAR"."REGION" VALUES ('AU', 'Australia');
INSERT INTO "ANWAR"."REGION" VALUES ('BE', 'Belgium');
INSERT INTO "ANWAR"."REGION" VALUES ('BR', 'Brazil');
INSERT INTO "ANWAR"."REGION" VALUES ('CA', 'Canada');
INSERT INTO "ANWAR"."REGION" VALUES ('CH', 'Switzerland');
INSERT INTO "ANWAR"."REGION" VALUES ('CN', 'China');
INSERT INTO "ANWAR"."REGION" VALUES ('DE', 'Germany');
INSERT INTO "ANWAR"."REGION" VALUES ('DK', 'Denmark');
INSERT INTO "ANWAR"."REGION" VALUES ('EG', 'Egypt');
INSERT INTO "ANWAR"."REGION" VALUES ('FR', 'France');
INSERT INTO "ANWAR"."REGION" VALUES ('IN', 'India');
INSERT INTO "ANWAR"."REGION" VALUES ('IT', 'Italy');
INSERT INTO "ANWAR"."REGION" VALUES ('JP', 'Japan');
INSERT INTO "ANWAR"."REGION" VALUES ('KW', 'Kuwait');
INSERT INTO "ANWAR"."REGION" VALUES ('ML', 'Malaysia');
INSERT INTO "ANWAR"."REGION" VALUES ('MX', 'Mexico');
INSERT INTO "ANWAR"."REGION" VALUES ('NG', 'Nigeria');
INSERT INTO "ANWAR"."REGION" VALUES ('NL', 'Netherlands');
INSERT INTO "ANWAR"."REGION" VALUES ('SG', 'Singapore');
INSERT INTO "ANWAR"."REGION" VALUES ('UK', 'United Kingdom');
INSERT INTO "ANWAR"."REGION" VALUES ('US', 'United States of America');
INSERT INTO "ANWAR"."REGION" VALUES ('ZM', 'Zambia');
INSERT INTO "ANWAR"."REGION" VALUES ('ZW', 'Zimbabwe');
INSERT INTO "ANWAR"."REGION" VALUES ('BD', 'Bangladesh');

-- ----------------------------
-- Table structure for REVIEWS
-- ----------------------------
DROP TABLE "ANWAR"."REVIEWS";
CREATE TABLE "ANWAR"."REVIEWS" (
  "REVIEW_ID" NUMBER VISIBLE NOT NULL,
  "RECIPE_ID" NUMBER VISIBLE,
  "USER_ID" NUMBER VISIBLE NOT NULL,
  "COMMENT_POSTED" VARCHAR2(1024 BYTE) VISIBLE,
  "RATING" NUMBER VISIBLE,
  "TIME_REVIEWED" TIMESTAMP(6) VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of REVIEWS
-- ----------------------------
INSERT INTO "ANWAR"."REVIEWS" VALUES ('8', '12', '94', 'random text', '4', TO_TIMESTAMP('2022-02-21 19:18:20.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('9', '13', '94', 'good one', '4', TO_TIMESTAMP('2022-02-21 19:36:00.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('10', '13', '57', 'good one', '4', TO_TIMESTAMP('2022-02-21 19:37:57.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('15', '15', '94', 'I think I liked it', '1', TO_TIMESTAMP('2022-02-22 02:28:35.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('20', '3', '94', 'nice', '5', TO_TIMESTAMP('2022-02-23 00:34:16.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('23', '22', '94', 'nice', '5', TO_TIMESTAMP('2022-02-25 02:14:43.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('12', '14', '94', 'test comment', '1', TO_TIMESTAMP('2022-02-21 22:33:00.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('24', '22', '94', NULL, '5', TO_TIMESTAMP('2022-02-25 02:14:48.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('1', '1', '2', 'This is a good recipe', '5', TO_TIMESTAMP('2022-02-04 23:42:49.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('2', '2', '2', 'This is a good recipe. I enjoyed it.', '5', TO_TIMESTAMP('2022-02-04 23:47:01.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('3', '3', '2', 'This is a good recipe. I enjoyed it.', '5', TO_TIMESTAMP('2022-02-04 23:47:01.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('4', '4', '2', 'This is a good recipe. I enjoyed it.', '4', TO_TIMESTAMP('2022-02-04 23:47:01.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('5', '3', '57', 'This is a good recipe. I enjoyed it.', '4', TO_TIMESTAMP('2022-02-04 23:47:01.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('6', '4', '57', 'This is a good recipe. I enjoyed it.', '2', TO_TIMESTAMP('2022-02-04 23:47:01.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('7', '5', '2', 'This is a  recipe needs improvement. I enjoyed it.', '3', TO_TIMESTAMP('2022-02-04 23:47:01.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('11', '17', '941', 'It tastes good', '4', TO_TIMESTAMP('2022-02-21 19:46:02.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('13', '14', '941', 'test comment 2', '4', TO_TIMESTAMP('2022-02-21 22:36:03.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('14', '9', '94', 'New One', '4', TO_TIMESTAMP('2022-02-22 01:52:04.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('18', '19', '94', 'new one.Liked it', '4', TO_TIMESTAMP('2022-02-22 04:41:42.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('19', '1', '94', 'tasty', '5', TO_TIMESTAMP('2022-02-23 00:31:24.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('21', '21', '942', 'good one', '5', TO_TIMESTAMP('2022-02-23 11:50:56.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('22', '22', '943', 'good', '5', TO_TIMESTAMP('2022-02-25 02:14:12.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('16', '11', '94', 'I like it very much', '5', TO_TIMESTAMP('2022-02-22 02:46:36.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));
INSERT INTO "ANWAR"."REVIEWS" VALUES ('17', '16', '94', 'Its is not of my type', '3', TO_TIMESTAMP('2022-02-22 04:28:23.000000', 'SYYYY-MM-DD HH24:MI:SS:FF6'));

-- ----------------------------
-- Table structure for REVIEW_SUMMARY
-- ----------------------------
DROP TABLE "ANWAR"."REVIEW_SUMMARY";
CREATE TABLE "ANWAR"."REVIEW_SUMMARY" (
  "REVIEW_SUMMARY_ID" NUMBER VISIBLE,
  "SCORE" NUMBER VISIBLE,
  "RATING_COUNT" NUMBER VISIBLE
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of REVIEW_SUMMARY
-- ----------------------------
INSERT INTO "ANWAR"."REVIEW_SUMMARY" VALUES ('3', '5', '1');
INSERT INTO "ANWAR"."REVIEW_SUMMARY" VALUES ('14', '2.5', '2');
INSERT INTO "ANWAR"."REVIEW_SUMMARY" VALUES ('20', '0', '0');
INSERT INTO "ANWAR"."REVIEW_SUMMARY" VALUES ('22', '5', '3');
INSERT INTO "ANWAR"."REVIEW_SUMMARY" VALUES ('21', '5', '1');

-- ----------------------------
-- Table structure for USERS
-- ----------------------------
DROP TABLE "ANWAR"."USERS";
CREATE TABLE "ANWAR"."USERS" (
  "USER_ID" NUMBER VISIBLE NOT NULL,
  "USER_NAME" VARCHAR2(1024 BYTE) VISIBLE NOT NULL,
  "EMAIL" VARCHAR2(255 BYTE) VISIBLE NOT NULL,
  "PASSWORD" VARCHAR2(255 BYTE) VISIBLE NOT NULL
)
LOGGING
NOCOMPRESS
PCTFREE 10
INITRANS 1
STORAGE (
  INITIAL 65536 
  NEXT 1048576 
  MINEXTENTS 1
  MAXEXTENTS 2147483645
  BUFFER_POOL DEFAULT
)
PARALLEL 1
NOCACHE
DISABLE ROW MOVEMENT
;

-- ----------------------------
-- Records of USERS
-- ----------------------------
INSERT INTO "ANWAR"."USERS" VALUES ('2', 'ABC', 'test@gmail.com', '123@');
INSERT INTO "ANWAR"."USERS" VALUES ('58', 'try8', 'try8@gmail.com', 'try8');
INSERT INTO "ANWAR"."USERS" VALUES ('98', 'try9', 'try9@gmail.com', 'try9');
INSERT INTO "ANWAR"."USERS" VALUES ('757', 'try10', 'try10@gmail.com', 'try10');
INSERT INTO "ANWAR"."USERS" VALUES ('803', 'try13', 'try13@abc.com', 'try13');
INSERT INTO "ANWAR"."USERS" VALUES ('252', 'try14', 'try14@gmail.com', 'try14');
INSERT INTO "ANWAR"."USERS" VALUES ('585', 'try16', 'try16@t.com', 'try16');
INSERT INTO "ANWAR"."USERS" VALUES ('4', 'Adyan Arafat', 'adyan@gmail.com', '123$#');
INSERT INTO "ANWAR"."USERS" VALUES ('941', 'anwar', 'anwar@email.com', '123#@');
INSERT INTO "ANWAR"."USERS" VALUES ('942', 'anwar133', 'anwar133@email.com', 'try5');
INSERT INTO "ANWAR"."USERS" VALUES ('75', 'try7', 'try7@gmail.com', 'try7');
INSERT INTO "ANWAR"."USERS" VALUES ('943', 'anwar123', 'anwar123@gmail.com', 'try5');
INSERT INTO "ANWAR"."USERS" VALUES ('123', 'try3', 'try3@gmail.com', 'try3');
INSERT INTO "ANWAR"."USERS" VALUES ('38', 'try4', 'try4@gmail.com', 'try4');
INSERT INTO "ANWAR"."USERS" VALUES ('12', 'try3', 'try3@gmail.com', 'try3');
INSERT INTO "ANWAR"."USERS" VALUES ('380', 'try4', 'try4@gmail.com', 'try4');
INSERT INTO "ANWAR"."USERS" VALUES ('94', 'try5', 'try5@email.com', 'try5');
INSERT INTO "ANWAR"."USERS" VALUES ('57', 'try10', 'try10@gmail.com', 'try10');
INSERT INTO "ANWAR"."USERS" VALUES ('594', 'try11', 'try11@test.com', 'try11');
INSERT INTO "ANWAR"."USERS" VALUES ('795', 'try12', 'try12@test.com', 'try12');
INSERT INTO "ANWAR"."USERS" VALUES ('3', 'EFG', 'TEST2@gamil.com', 'abc123#');
INSERT INTO "ANWAR"."USERS" VALUES ('940', 'try5', 'try5@email.com', 'try5');

-- ----------------------------
-- Primary Key structure for table CATEGORIES
-- ----------------------------
ALTER TABLE "ANWAR"."CATEGORIES" ADD CONSTRAINT "SYS_C007867" PRIMARY KEY ("CATEGORY_ID");

-- ----------------------------
-- Checks structure for table CATEGORIES
-- ----------------------------
ALTER TABLE "ANWAR"."CATEGORIES" ADD CONSTRAINT "SYS_C007865" CHECK ("CATEGORY_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."CATEGORIES" ADD CONSTRAINT "SYS_C007866" CHECK ("CATEGORY_NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table INGREDIENTS
-- ----------------------------
ALTER TABLE "ANWAR"."INGREDIENTS" ADD CONSTRAINT "SYS_C007864" PRIMARY KEY ("INGREDIENTS_ID");

-- ----------------------------
-- Checks structure for table INGREDIENTS
-- ----------------------------
ALTER TABLE "ANWAR"."INGREDIENTS" ADD CONSTRAINT "SYS_C007862" CHECK ("INGREDIENTS_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."INGREDIENTS" ADD CONSTRAINT "SYS_C007863" CHECK ("INGREDIENTS_NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table KEYWORDS
-- ----------------------------
ALTER TABLE "ANWAR"."KEYWORDS" ADD CONSTRAINT "SYS_C007870" CHECK ("RECIPE_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table NUTRITION_INFO
-- ----------------------------
ALTER TABLE "ANWAR"."NUTRITION_INFO" ADD CONSTRAINT "SYS_C007871" CHECK ("RECIPE_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table RECIPES
-- ----------------------------
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "SYS_C007851" PRIMARY KEY ("RECIPE_ID");

-- ----------------------------
-- Checks structure for table RECIPES
-- ----------------------------
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "SYS_C007850" CHECK ("RECIPE_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "SYS_C007889" CHECK ("CONTRIBUTOR_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table RECIPE_INFO
-- ----------------------------
ALTER TABLE "ANWAR"."RECIPE_INFO" ADD CONSTRAINT "SYS_C007855" PRIMARY KEY ("INFORMATION_ID");

-- ----------------------------
-- Checks structure for table RECIPE_INFO
-- ----------------------------
ALTER TABLE "ANWAR"."RECIPE_INFO" ADD CONSTRAINT "SYS_C007852" CHECK ("INFORMATION_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."RECIPE_INFO" ADD CONSTRAINT "SYS_C007854" CHECK ("REVIEW_SUMMARY_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Primary Key structure for table REGION
-- ----------------------------
ALTER TABLE "ANWAR"."REGION" ADD CONSTRAINT "SYS_C007849" PRIMARY KEY ("REGION_ID");

-- ----------------------------
-- Checks structure for table REGION
-- ----------------------------
ALTER TABLE "ANWAR"."REGION" ADD CONSTRAINT "SYS_C007847" CHECK ("REGION_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."REGION" ADD CONSTRAINT "SYS_C007848" CHECK ("REGION_NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Checks structure for table REVIEWS
-- ----------------------------
ALTER TABLE "ANWAR"."REVIEWS" ADD CONSTRAINT "SYS_C007859" CHECK ("REVIEW_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."REVIEWS" ADD CONSTRAINT "SYS_C007860" CHECK ("USER_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Triggers structure for table REVIEWS
-- ----------------------------
CREATE TRIGGER "ANWAR"."REVIEW_SCORE" AFTER INSERT ON "ANWAR"."REVIEWS" REFERENCING OLD AS "OLD" NEW AS "NEW" FOR EACH ROW 
DECLARE
	PREV_RATING NUMBER;
	RECORD_ID NUMBER;
	REC_ID NUMBER;
	NEW_SCORE NUMBER;
	ENTRY NUMBER;
BEGIN
	REC_ID := :NEW.RECIPE_ID;
	NEW_SCORE := :NEW.RATING;
	SELECT SCORE, RATING_COUNT INTO PREV_RATING, ENTRY
	FROM REVIEW_SUMMARY
	WHERE REVIEW_SUMMARY_ID = REC_ID;
	NEW_SCORE := (PREV_RATING * ENTRY + NEW_SCORE);
	ENTRY := ENTRY + 1;
	NEW_SCORE := NEW_SCORE / ENTRY;
	UPDATE REVIEW_SUMMARY
	SET SCORE = NEW_SCORE, RATING_COUNT = ENTRY
	WHERE REVIEW_SUMMARY_ID = REC_ID;
EXCEPTION
	WHEN NO_DATA_FOUND THEN
		INSERT INTO REVIEW_SUMMARY VALUES (REC_ID, NEW_SCORE, 1);
END;
/

-- ----------------------------
-- Primary Key structure for table USERS
-- ----------------------------
ALTER TABLE "ANWAR"."USERS" ADD CONSTRAINT "SYS_C007869" PRIMARY KEY ("USER_ID");

-- ----------------------------
-- Checks structure for table USERS
-- ----------------------------
ALTER TABLE "ANWAR"."USERS" ADD CONSTRAINT "SYS_C007868" CHECK ("USER_ID" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."USERS" ADD CONSTRAINT "SYS_C008157" CHECK ("USER_NAME" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."USERS" ADD CONSTRAINT "SYS_C008158" CHECK ("EMAIL" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."USERS" ADD CONSTRAINT "SYS_C008159" CHECK ("PASSWORD" IS NOT NULL) NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table FAVOURITES
-- ----------------------------
ALTER TABLE "ANWAR"."FAVOURITES" ADD CONSTRAINT "FAV_RECIPE_ID_FK" FOREIGN KEY ("RECIPE_ID") REFERENCES "ANWAR"."RECIPES" ("RECIPE_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."FAVOURITES" ADD CONSTRAINT "FAV_USER_ID_FK" FOREIGN KEY ("USER_ID") REFERENCES "ANWAR"."USERS" ("USER_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table INGREDIENTS_LIST
-- ----------------------------
ALTER TABLE "ANWAR"."INGREDIENTS_LIST" ADD CONSTRAINT "INGREDIENT_ID_FK" FOREIGN KEY ("INGREDIENT_LIST_ID") REFERENCES "ANWAR"."INGREDIENTS" ("INGREDIENTS_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."INGREDIENTS_LIST" ADD CONSTRAINT "RECIPE_ID_INGREDIENT_FK" FOREIGN KEY ("RECIPE_ID") REFERENCES "ANWAR"."RECIPES" ("RECIPE_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table KEYWORDS
-- ----------------------------
ALTER TABLE "ANWAR"."KEYWORDS" ADD CONSTRAINT "KEYWORD_FK" FOREIGN KEY ("RECIPE_ID") REFERENCES "ANWAR"."RECIPES" ("RECIPE_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table NUTRITION_INFO
-- ----------------------------
ALTER TABLE "ANWAR"."NUTRITION_INFO" ADD CONSTRAINT "RECIPE_NUTRITION_FK" FOREIGN KEY ("RECIPE_ID") REFERENCES "ANWAR"."RECIPES" ("RECIPE_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table RECIPES
-- ----------------------------
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "CATEGORY_ID_FK" FOREIGN KEY ("CATEGORY_ID") REFERENCES "ANWAR"."CATEGORIES" ("CATEGORY_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "CONTRIBUTOR_ID_FK" FOREIGN KEY ("CONTRIBUTOR_ID") REFERENCES "ANWAR"."USERS" ("USER_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "RECIPE_INFO_FK" FOREIGN KEY ("INFORMATION_ID") REFERENCES "ANWAR"."RECIPE_INFO" ("INFORMATION_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
ALTER TABLE "ANWAR"."RECIPES" ADD CONSTRAINT "REGION_ID_FK" FOREIGN KEY ("REGION_ID") REFERENCES "ANWAR"."REGION" ("REGION_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;

-- ----------------------------
-- Foreign Keys structure for table REVIEWS
-- ----------------------------
ALTER TABLE "ANWAR"."REVIEWS" ADD CONSTRAINT "RECIPE_ID_REVIEW_FK" FOREIGN KEY ("RECIPE_ID") REFERENCES "ANWAR"."RECIPES" ("RECIPE_ID") NOT DEFERRABLE INITIALLY IMMEDIATE NORELY VALIDATE;
