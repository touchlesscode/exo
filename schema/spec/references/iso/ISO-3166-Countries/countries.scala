/*
 * Copyright 2017 Vitor S. Vieira
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.vitorsvieira.iso

import com.vitorsvieira.iso.ISOContinent.ISOContinent

import scala.collection.immutable.Seq

/**
 * *
 * ISO 3166-1
 * ISO 3166 is the International Standard for country codes and codes for their subdivisions.
 * Alpha-2 country codes can be represented either as a two-letter code.
 * Alpha-3 country code can be represented either as a three-letter code.
 * <a href="http://www.iso.org/iso/home/standards/country_codes.htm">International Organization for Standardization website</a>.
 * <a href="http://unstats.un.org/unsd/methods/m49/m49alpha.htm">United Nations Statistics Department</a>.
 */
object ISOCountry extends Enum {

  sealed class EnumVal(
    val value:         String,
    val numericalCode: Int,
    val englishName:   String,
    val alpha3Code:    String,
    val continent:     ISOContinent
  ) extends Value

  type ISOCountry = EnumVal
  // format: OFF
  val AFGHANISTAN                                  = new ISOCountry("AF", 4, "Afghanistan", "AFG", ISOContinent.ASIA)
  val ALAND_ISLANDS                                = new ISOCountry("AX", 248, "Åland Islands", "ALA", ISOContinent.EUROPE)
  val ALBANIA                                      = new ISOCountry("AL", 8, "Albania", "ALB", ISOContinent.EUROPE)
  val ALGERIA                                      = new ISOCountry("DZ", 12, "Algeria", "DZA", ISOContinent.AFRICA)
  val AMERICAN_SAMOA                               = new ISOCountry("AS", 16, "American Samoa", "ASM", ISOContinent.OCEANIA)
  val ANDORRA                                      = new ISOCountry("AD", 20, "Andorra", "AND", ISOContinent.EUROPE)
  val ANGOLA                                       = new ISOCountry("AO", 24, "Angola", "AGO", ISOContinent.AFRICA)
  val ANGUILLA                                     = new ISOCountry("AI", 660, "Anguilla", "AIA", ISOContinent.NORTH_AMERICA)
  val ANTARCTICA                                   = new ISOCountry("AQ", 10, "Antarctica", "ATA", ISOContinent.ANTARCTICA)
  val ANTIGUA_AND_BARBUDA                          = new ISOCountry("AG", 28, "Antigua and Barbuda", "ATG", ISOContinent.NORTH_AMERICA)
  val ARGENTINA                                    = new ISOCountry("AR", 32, "Argentina", "ARG", ISOContinent.SOUTH_AMERICA)
  val ARMENIA                                      = new ISOCountry("AM", 51, "Armenia", "ARM", ISOContinent.ASIA)
  val ARUBA                                        = new ISOCountry("AW", 533, "Aruba", "ABW", ISOContinent.NORTH_AMERICA)
  val AUSTRALIA                                    = new ISOCountry("AU", 36, "Australia", "AUS", ISOContinent.OCEANIA)
  val AUSTRIA                                      = new ISOCountry("AT", 40, "Austria", "AUT", ISOContinent.EUROPE)
  val AZERBAIJAN                                   = new ISOCountry("AZ", 31, "Azerbaijan", "AZE", ISOContinent.ASIA)
  val BAHAMAS                                      = new ISOCountry("BS", 44, "Bahamas", "BHS", ISOContinent.NORTH_AMERICA)
  val BAHRAIN                                      = new ISOCountry("BH", 48, "Bahrain", "BHR", ISOContinent.ASIA)
  val BANGLADESH                                   = new ISOCountry("BD", 50, "Bangladesh", "BGD", ISOContinent.ASIA)
  val BARBADOS                                     = new ISOCountry("BB", 52, "Barbados", "BRB", ISOContinent.NORTH_AMERICA)
  val BELARUS                                      = new ISOCountry("BY", 112, "Belarus", "BLR", ISOContinent.EUROPE)
  val BELGIUM                                      = new ISOCountry("BE", 56, "Belgium", "BEL", ISOContinent.EUROPE)
  val BELIZE                                       = new ISOCountry("BZ", 84, "Belize", "BLZ", ISOContinent.NORTH_AMERICA)
  val BENIN                                        = new ISOCountry("BJ", 204, "Benin", "BEN", ISOContinent.AFRICA)
  val BERMUDA                                      = new ISOCountry("BM", 60, "Bermuda", "BMU", ISOContinent.NORTH_AMERICA)
  val BHUTAN                                       = new ISOCountry("BT", 64, "Bhutan", "BTN", ISOContinent.ASIA)
  val BOLIVIA                                      = new ISOCountry("BO", 68, "Bolivia (Plurinational State of)", "BOL", ISOContinent.SOUTH_AMERICA)
  val BONAIRE                                      = new ISOCountry("BQ", 535, "Bonaire, Sint Eustatius and Saba", "BES", ISOContinent.NORTH_AMERICA)
  val BOSNIA_AND_HERZEGOVINA                       = new ISOCountry("BA", 70, "Bosnia and Herzegovina", "BIH", ISOContinent.EUROPE)
  val BOTSWANA                                     = new ISOCountry("BW", 72, "Botswana", "BWA", ISOContinent.AFRICA)
  val BOUVET_ISLAND                                = new ISOCountry("BV", 74, "Bouvet Island", "BVT", ISOContinent.ANTARCTICA)
  val BRAZIL                                       = new ISOCountry("BR", 76, "Brazil", "BRA", ISOContinent.SOUTH_AMERICA)
  val BRITISH_INDIAN_OCEAN_TERRITORY               = new ISOCountry("IO", 86, "British Indian Ocean Territory (the)", "IOT", ISOContinent.ASIA)
  val BRITISH_VIRGIN_ISLANDS                       = new ISOCountry("VG", 92, "British Virgin Islands", "VGB", ISOContinent.NORTH_AMERICA)
  val BRUNEI_DARUSSALAM                            = new ISOCountry("BN", 96, "Brunei Darussalam", "BRN", ISOContinent.ASIA)
  val BULGARIA                                     = new ISOCountry("BG", 100, "Bulgaria", "BGR", ISOContinent.EUROPE)
  val BURKINA_FASO                                 = new ISOCountry("BF", 854, "Burkina Faso", "BFA", ISOContinent.AFRICA)
  val BURUNDI                                      = new ISOCountry("BI", 108, "Burundi", "BDI", ISOContinent.AFRICA)
  val CAMBODIA                                     = new ISOCountry("KH", 116, "Cambodia", "KHM", ISOContinent.ASIA)
  val CAMEROON                                     = new ISOCountry("CM", 120, "Cameroon", "CMR", ISOContinent.AFRICA)
  val CANADA                                       = new ISOCountry("CA", 124, "Canada", "CAN", ISOContinent.NORTH_AMERICA)
  val CAPE_VERDE                                   = new ISOCountry("CV", 132, "Cabo Verde", "CPV", ISOContinent.AFRICA)
  val CAYMAN_ISLANDS                               = new ISOCountry("KY", 136, "Cayman Islands", "CYM", ISOContinent.NORTH_AMERICA)
  val CENTRAL_AFRICAN_REPUBLIC                     = new ISOCountry("CF", 140, "Central African Republic", "CAF", ISOContinent.AFRICA)
  val CHAD                                         = new ISOCountry("TD", 148, "Chad", "TCD", ISOContinent.AFRICA)
  val CHILE                                        = new ISOCountry("CL", 152, "Chile", "CHL", ISOContinent.SOUTH_AMERICA)
  val CHINA                                        = new ISOCountry("CN", 156, "China", "CHN", ISOContinent.ASIA)
  val CHRISTMAS_ISLAND                             = new ISOCountry("CX", 162, "Christmas Island", "CXR", ISOContinent.ASIA)
  val COCOS_ISLANDS                                = new ISOCountry("CC", 166, "Cocos (Keeling) Islands (the)", "CCK", ISOContinent.ASIA)
  val COLOMBIA                                     = new ISOCountry("CO", 170, "Colombia", "COL", ISOContinent.SOUTH_AMERICA)
  val COMOROS                                      = new ISOCountry("KM", 174, "Comoros", "COM", ISOContinent.AFRICA)
  val CONGO                                        = new ISOCountry("CG", 178, "Congo", "COG", ISOContinent.AFRICA)
  val COOK_ISLANDS                                 = new ISOCountry("CK", 184, "Cook Islands", "COK", ISOContinent.OCEANIA)
  val COSTA_RICA                                   = new ISOCountry("CR", 188, "Costa Rica", "CRI", ISOContinent.NORTH_AMERICA)
  val COTE_D_IVOIRE                                = new ISOCountry("CI", 384, "Côte d'Ivoire", "CIV", ISOContinent.AFRICA)
  val CROATIA                                      = new ISOCountry("HR", 191, "Croatia", "HRV", ISOContinent.EUROPE)
  val CUBA                                         = new ISOCountry("CU", 192, "Cuba", "CUB", ISOContinent.NORTH_AMERICA)
  val CURACAO                                      = new ISOCountry("CW", 531, "Curaçao", "CUW", ISOContinent.NORTH_AMERICA)
  val CYPRUS                                       = new ISOCountry("CY", 196, "Cyprus", "CYP", ISOContinent.ASIA)
  val CZECH_REPUBLIC                               = new ISOCountry("CZ", 203, "Czechia", "CZE", ISOContinent.EUROPE)
  val DENMARK                                      = new ISOCountry("DK", 208, "Denmark", "DNK", ISOContinent.EUROPE)
  val DJIBOUTI                                     = new ISOCountry("DJ", 262, "Djibouti", "DJI", ISOContinent.AFRICA)
  val DOMINICA                                     = new ISOCountry("DM", 212, "Dominica", "DMA", ISOContinent.NORTH_AMERICA)
  val DOMINICAN_REPUBLIC                           = new ISOCountry("DO", 214, "Dominican Republic", "DOM", ISOContinent.NORTH_AMERICA)
  val ECUADOR                                      = new ISOCountry("EC", 218, "Ecuador", "ECU", ISOContinent.SOUTH_AMERICA)
  val EGYPT                                        = new ISOCountry("EG", 818, "Egypt", "EGY", ISOContinent.AFRICA)
  val EL_SALVADOR                                  = new ISOCountry("SV", 222, "El Salvador", "SLV", ISOContinent.NORTH_AMERICA)
  val EQUATORIAL_GUINEA                            = new ISOCountry("GQ", 226, "Equatorial Guinea", "GNQ", ISOContinent.AFRICA)
  val ERITREA                                      = new ISOCountry("ER", 232, "Eritrea", "ERI", ISOContinent.AFRICA)
  val ESTONIA                                      = new ISOCountry("EE", 233, "Estonia", "EST", ISOContinent.EUROPE)
  val ETHIOPIA                                     = new ISOCountry("ET", 231, "Ethiopia", "ETH", ISOContinent.AFRICA)
  val FALKLAND_ISLANDS                             = new ISOCountry("FK", 238, "Falkland Islands (Malvinas)", "FLK", ISOContinent.SOUTH_AMERICA)
  val FAROE_ISLANDS                                = new ISOCountry("FO", 234, "Faeroe Islands", "FRO", ISOContinent.EUROPE)
  val FIJI                                         = new ISOCountry("FJ", 242, "Fiji", "FJI", ISOContinent.OCEANIA)
  val FINLAND                                      = new ISOCountry("FI", 246, "Finland", "FIN", ISOContinent.EUROPE)
  val FRANCE                                       = new ISOCountry("FR", 250, "France", "FRA", ISOContinent.EUROPE)
  val FRENCH_GUIANA                                = new ISOCountry("GF", 254, "French Guiana", "GUF", ISOContinent.SOUTH_AMERICA)
  val FRENCH_POLYNESIA                             = new ISOCountry("PF", 258, "French Polynesia", "PYF", ISOContinent.OCEANIA)
  val FRENCH_SOUTHERN_TERRITORIES                  = new ISOCountry("TF", 260, "French Southern Territories (the)", "ATF", ISOContinent.ANTARCTICA)
  val GABON                                        = new ISOCountry("GA", 266, "Gabon", "GAB", ISOContinent.AFRICA)
  val GAMBIA                                       = new ISOCountry("GM", 270, "Gambia", "GMB", ISOContinent.AFRICA)
  val GEORGIA                                      = new ISOCountry("GE", 268, "Georgia", "GEO", ISOContinent.ASIA)
  val GERMANY                                      = new ISOCountry("DE", 276, "Germany", "DEU", ISOContinent.EUROPE)
  val GHANA                                        = new ISOCountry("GH", 288, "Ghana", "GHA", ISOContinent.AFRICA)
  val GIBRALTAR                                    = new ISOCountry("GI", 292, "Gibraltar", "GIB", ISOContinent.EUROPE)
  val GREECE                                       = new ISOCountry("GR", 300, "Greece", "GRC", ISOContinent.EUROPE)
  val GREENLAND                                    = new ISOCountry("GL", 304, "Greenland", "GRL", ISOContinent.NORTH_AMERICA)
  val GRENADA                                      = new ISOCountry("GD", 308, "Grenada", "GRD", ISOContinent.NORTH_AMERICA)
  val GUADELOUPE                                   = new ISOCountry("GP", 312, "Guadeloupe", "GLP", ISOContinent.NORTH_AMERICA)
  val GUAM                                         = new ISOCountry("GU", 316, "Guam", "GUM", ISOContinent.OCEANIA)
  val GUATEMALA                                    = new ISOCountry("GT", 320, "Guatemala", "GTM", ISOContinent.NORTH_AMERICA)
  val GUERNSEY                                     = new ISOCountry("GG", 831, "Guernsey", "GGY", ISOContinent.EUROPE)
  val GUINEA                                       = new ISOCountry("GN", 324, "Guinea", "GIN", ISOContinent.AFRICA)
  val GUINEA_BISSAU                                = new ISOCountry("GW", 624, "Guinea-Bissau", "GNB", ISOContinent.AFRICA)
  val GUYANA                                       = new ISOCountry("GY", 328, "Guyana", "GUY", ISOContinent.SOUTH_AMERICA)
  val HAITI                                        = new ISOCountry("HT", 332, "Haiti", "HTI", ISOContinent.NORTH_AMERICA)
  val HEARD_ISLAND_AND_MCDONALD_ISLANDS            = new ISOCountry("HM", 334, "Heard Island and McDonald Islands", "HMD", ISOContinent.ANTARCTICA)
  val HONDURAS                                     = new ISOCountry("HN", 340, "Honduras", "HND", ISOContinent.NORTH_AMERICA)
  val HONG_KONG                                    = new ISOCountry("HK", 344, "Hong Kong", "HKG", ISOContinent.ASIA)
  val HUNGARY                                      = new ISOCountry("HU", 348, "Hungary", "HUN", ISOContinent.EUROPE)
  val ICELAND                                      = new ISOCountry("IS", 352, "Iceland", "ISL", ISOContinent.EUROPE)
  val INDIA                                        = new ISOCountry("IN", 356, "India", "IND", ISOContinent.ASIA)
  val INDONESIA                                    = new ISOCountry("ID", 360, "Indonesia", "IDN", ISOContinent.ASIA)
  val IRAN                                         = new ISOCountry("IR", 364, "Iran (Islamic Republic of)", "IRN", ISOContinent.ASIA)
  val IRAQ                                         = new ISOCountry("IQ", 368, "Iraq", "IRQ", ISOContinent.ASIA)
  val IRELAND                                      = new ISOCountry("IE", 372, "Ireland", "IRL", ISOContinent.EUROPE)
  val ISLE_OF_MAN                                  = new ISOCountry("IM", 833, "Isle of Man", "IMN", ISOContinent.EUROPE)
  val ISRAEL                                       = new ISOCountry("IL", 376, "Israel", "ISR", ISOContinent.ASIA)
  val ITALY                                        = new ISOCountry("IT", 380, "Italy", "ITA", ISOContinent.EUROPE)
  val JAMAICA                                      = new ISOCountry("JM", 388, "Jamaica", "JAM", ISOContinent.NORTH_AMERICA)
  val JAPAN                                        = new ISOCountry("JP", 392, "Japan", "JPN", ISOContinent.ASIA)
  val JERSEY                                       = new ISOCountry("JE", 832, "Jersey", "JEY", ISOContinent.EUROPE)
  val JORDAN                                       = new ISOCountry("JO", 400, "Jordan", "JOR", ISOContinent.ASIA)
  val KAZAKHSTAN                                   = new ISOCountry("KZ", 398, "Kazakhstan", "KAZ", ISOContinent.ASIA)
  val KENYA                                        = new ISOCountry("KE", 404, "Kenya", "KEN", ISOContinent.AFRICA)
  val KIRIBATI                                     = new ISOCountry("KI", 296, "Kiribati", "KIR", ISOContinent.OCEANIA)
  val KUWAIT                                       = new ISOCountry("KW", 414, "Kuwait", "KWT", ISOContinent.ASIA)
  val KYRGYZSTAN                                   = new ISOCountry("KG", 417, "Kyrgyzstan", "KGZ", ISOContinent.ASIA)
  val LAO_PEOPLES_DEMOCRATIC_REPUBLIC              = new ISOCountry("LA", 418, "Lao People's Democratic Republic", "LAO", ISOContinent.ASIA)
  val LATVIA                                       = new ISOCountry("LV", 428, "Latvia", "LVA", ISOContinent.EUROPE)
  val LEBANON                                      = new ISOCountry("LB", 422, "Lebanon", "LBN", ISOContinent.ASIA)
  val LESOTHO                                      = new ISOCountry("LS", 426, "Lesotho", "LSO", ISOContinent.AFRICA)
  val LIBERIA                                      = new ISOCountry("LR", 430, "Liberia", "LBR", ISOContinent.AFRICA)
  val LIBYA                                        = new ISOCountry("LY", 434, "Libya", "LBY", ISOContinent.AFRICA)
  val LIECHTENSTEIN                                = new ISOCountry("LI", 438, "Liechtenstein", "LIE", ISOContinent.EUROPE)
  val LITHUANIA                                    = new ISOCountry("LT", 440, "Lithuania", "LTU", ISOContinent.EUROPE)
  val LUXEMBOURG                                   = new ISOCountry("LU", 442, "Luxembourg", "LUX", ISOContinent.EUROPE)
  val MACAO                                        = new ISOCountry("MO", 446, "Macao", "MAC", ISOContinent.ASIA)
  val MACEDONIA                                    = new ISOCountry("MK", 807, "Macedonia (the former Yugoslav Republic of)", "MKD", ISOContinent.EUROPE)
  val MADAGASCAR                                   = new ISOCountry("MG", 450, "Madagascar", "MDG", ISOContinent.AFRICA)
  val MALAWI                                       = new ISOCountry("MW", 454, "Malawi", "MWI", ISOContinent.AFRICA)
  val MALAYSIA                                     = new ISOCountry("MY", 458, "Malaysia", "MYS", ISOContinent.ASIA)
  val MALDIVES                                     = new ISOCountry("MV", 462, "Maldives", "MDV", ISOContinent.ASIA)
  val MALI                                         = new ISOCountry("ML", 466, "Mali", "MLI", ISOContinent.AFRICA)
  val MALTA                                        = new ISOCountry("MT", 470, "Malta", "MLT", ISOContinent.EUROPE)
  val MARSHALL_ISLANDS                             = new ISOCountry("MH", 584, "Marshall Islands", "MHL", ISOContinent.OCEANIA)
  val MARTINIQUE                                   = new ISOCountry("MQ", 474, "Martinique", "MTQ", ISOContinent.NORTH_AMERICA)
  val MAURITANIA                                   = new ISOCountry("MR", 478, "Mauritania", "MRT", ISOContinent.AFRICA)
  val MAURITIUS                                    = new ISOCountry("MU", 480, "Mauritius", "MUS", ISOContinent.AFRICA)
  val MAYOTTE                                      = new ISOCountry("YT", 175, "Mayotte", "MYT", ISOContinent.AFRICA)
  val MEXICO                                       = new ISOCountry("MX", 484, "Mexico", "MEX", ISOContinent.NORTH_AMERICA)
  val MICRONESIA                                   = new ISOCountry("FM", 583, "Micronesia (Federated States of)", "FSM", ISOContinent.OCEANIA)
  val MOLDOVA                                      = new ISOCountry("MD", 498, "Moldova (the Republic of)", "MDA", ISOContinent.EUROPE)
  val MONACO                                       = new ISOCountry("MC", 492, "Monaco", "MCO", ISOContinent.EUROPE)
  val MONGOLIA                                     = new ISOCountry("MN", 496, "Mongolia", "MNG", ISOContinent.ASIA)
  val MONTENEGRO                                   = new ISOCountry("ME", 499, "Montenegro", "MNE", ISOContinent.EUROPE)
  val MONTSERRAT                                   = new ISOCountry("MS", 500, "Montserrat", "MSR", ISOContinent.EUROPE)
  val MOROCCO                                      = new ISOCountry("MA", 504, "Morocco", "MAR", ISOContinent.AFRICA)
  val MOZAMBIQUE                                   = new ISOCountry("MZ", 508, "Mozambique", "MOZ", ISOContinent.AFRICA)
  val MYANMAR                                      = new ISOCountry("MM", 104, "Myanmar", "MMR", ISOContinent.ASIA)
  val NAMIBIA                                      = new ISOCountry("NA", 516, "Namibia", "NAM", ISOContinent.AFRICA)
  val NAURU                                        = new ISOCountry("NR", 520, "Nauru", "NRU", ISOContinent.OCEANIA)
  val NEPAL                                        = new ISOCountry("NP", 524, "Nepal", "NPL", ISOContinent.ASIA)
  val NETHERLANDS                                  = new ISOCountry("NL", 528, "Netherlands", "NLD", ISOContinent.EUROPE)
  val NEW_CALEDONIA                                = new ISOCountry("NC", 540, "New Caledonia", "NCL", ISOContinent.OCEANIA)
  val NEW_ZEALAND                                  = new ISOCountry("NZ", 554, "New Zealand", "NZL", ISOContinent.OCEANIA)
  val NICARAGUA                                    = new ISOCountry("NI", 558, "Nicaragua", "NIC", ISOContinent.NORTH_AMERICA)
  val NIGER                                        = new ISOCountry("NE", 562, "Niger", "NER", ISOContinent.AFRICA)
  val NIGERIA                                      = new ISOCountry("NG", 566, "Nigeria", "NGA", ISOContinent.AFRICA)
  val NIUE                                         = new ISOCountry("NU", 570, "Niue", "NIU", ISOContinent.OCEANIA)
  val NORFOLK_ISLAND                               = new ISOCountry("NF", 574, "Norfolk Island", "NFK", ISOContinent.OCEANIA)
  val NORTHERN_MARIANA_ISLANDS                     = new ISOCountry("MP", 580, "Northern Mariana Islands", "MNP", ISOContinent.OCEANIA)
  val NORTH_KOREA                                  = new ISOCountry("KP", 408, "Korea (the Democratic People's Republic of)", "PRK", ISOContinent.ASIA)
  val NORWAY                                       = new ISOCountry("NO", 578, "Norway", "NOR", ISOContinent.EUROPE)
  val OMAN                                         = new ISOCountry("OM", 512, "Oman", "OMN", ISOContinent.ASIA)
  val PAKISTAN                                     = new ISOCountry("PK", 586, "Pakistan", "PAK", ISOContinent.ASIA)
  val PALAU                                        = new ISOCountry("PW", 585, "Palau", "PLW", ISOContinent.OCEANIA)
  val PALESTINE                                    = new ISOCountry("PS", 275, "Palestine, State of", "PSE", ISOContinent.ASIA)
  val PANAMA                                       = new ISOCountry("PA", 591, "Panama", "PAN", ISOContinent.NORTH_AMERICA)
  val PAPUA_NEW_GUINEA                             = new ISOCountry("PG", 598, "Papua New Guinea", "PNG", ISOContinent.OCEANIA)
  val PARAGUAY                                     = new ISOCountry("PY", 600, "Paraguay", "PRY", ISOContinent.SOUTH_AMERICA)
  val PERU                                         = new ISOCountry("PE", 604, "Peru", "PER", ISOContinent.SOUTH_AMERICA)
  val PHILIPPINES                                  = new ISOCountry("PH", 608, "Philippines", "PHL", ISOContinent.ASIA)
  val PITCAIRN                                     = new ISOCountry("PN", 612, "Pitcairn Islands", "PCN", ISOContinent.OCEANIA)
  val POLAND                                       = new ISOCountry("PL", 616, "Poland", "POL", ISOContinent.EUROPE)
  val PORTUGAL                                     = new ISOCountry("PT", 620, "Portugal", "PRT", ISOContinent.EUROPE)
  val PUERTO_RICO                                  = new ISOCountry("PR", 630, "Puerto Rico", "PRI", ISOContinent.NORTH_AMERICA)
  val QATAR                                        = new ISOCountry("QA", 634, "Qatar", "QAT", ISOContinent.ASIA)
  val REUNION                                      = new ISOCountry("RE", 638, "Réunion", "REU", ISOContinent.AFRICA)
  val ROMANIA                                      = new ISOCountry("RO", 642, "Romania", "ROU", ISOContinent.EUROPE)
  val RUSSIAN_FEDERATION                           = new ISOCountry("RU", 643, "Russian Federation", "RUS", ISOContinent.ASIA)
  val RWANDA                                       = new ISOCountry("RW", 646, "Rwanda", "RWA", ISOContinent.AFRICA)
  val SAINT_BARTHELEMY                             = new ISOCountry("BL", 652, "Saint Barthélemy", "BLM", ISOContinent.NORTH_AMERICA)
  val SAINT_HELENA                                 = new ISOCountry("SH", 654, "Saint Helena", "SHN", ISOContinent.AFRICA)
  val SAINT_KITTS_AND_NEVIS                        = new ISOCountry("KN", 659, "Saint Kitts and Nevis", "KNA", ISOContinent.NORTH_AMERICA)
  val SAINT_LUCIA                                  = new ISOCountry("LC", 662, "Saint Lucia", "LCA", ISOContinent.NORTH_AMERICA)
  val SAINT_MARTIN                                 = new ISOCountry("MF", 663, "Saint Martin (French part)", "MAF", ISOContinent.NORTH_AMERICA)
  val SAINT_PIERRE_AND_MIQUELON                    = new ISOCountry("PM", 666, "Saint Pierre and Miquelon", "SPM", ISOContinent.NORTH_AMERICA)
  val SAINT_VINCENT_AND_THE_GRENADINES             = new ISOCountry("VC", 670, "Saint Vincent and the Grenadines", "VCT", ISOContinent.NORTH_AMERICA)
  val SAMOA                                        = new ISOCountry("WS", 882, "Samoa", "WSM", ISOContinent.OCEANIA)
  val SAN_MARINO                                   = new ISOCountry("SM", 674, "San Marino", "SMR", ISOContinent.EUROPE)
  val SAO_TOME_AND_PRINCIPE                        = new ISOCountry("ST", 678, "Sao Tome and Principe", "STP", ISOContinent.AFRICA)
  val SAUDI_ARABIA                                 = new ISOCountry("SA", 682, "Saudi Arabia", "SAU", ISOContinent.ASIA)
  val SENEGAL                                      = new ISOCountry("SN", 686, "Senegal", "SEN", ISOContinent.AFRICA)
  val SERBIA                                       = new ISOCountry("RS", 688, "Serbia", "SRB", ISOContinent.EUROPE)
  val SEYCHELLES                                   = new ISOCountry("SC", 690, "Seychelles", "SYC", ISOContinent.AFRICA)
  val SIERRA_LEONE                                 = new ISOCountry("SL", 694, "Sierra Leone", "SLE", ISOContinent.AFRICA)
  val SINGAPORE                                    = new ISOCountry("SG", 702, "Singapore", "SGP", ISOContinent.ASIA)
  val SINT_MAARTEN                                 = new ISOCountry("SX", 534, "Sint Maarten (Dutch part)", "SXM", ISOContinent.NORTH_AMERICA)
  val SLOVAKIA                                     = new ISOCountry("SK", 703, "Slovakia", "SVK", ISOContinent.EUROPE)
  val SLOVENIA                                     = new ISOCountry("SI", 705, "Slovenia", "SVN", ISOContinent.EUROPE)
  val SOLOMON_ISLANDS                              = new ISOCountry("SB", 90, "Solomon Islands", "SLB", ISOContinent.OCEANIA)
  val SOMALIA                                      = new ISOCountry("SO", 706, "Somalia", "SOM", ISOContinent.AFRICA)
  val SOUTH_AFRICA                                 = new ISOCountry("ZA", 710, "South Africa", "ZAF", ISOContinent.AFRICA)
  val SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS = new ISOCountry("GS", 239, "South Georgia and the South Sandwich Island", "SGS", ISOContinent.ANTARCTICA)
  val SOUTH_KOREA                                  = new ISOCountry("KR", 410, "Korea (the Republic of)", "KOR", ISOContinent.ASIA)
  val SOUTH_SUDAN                                  = new ISOCountry("SS", 728, "South Sudan", "SSD", ISOContinent.AFRICA)
  val SPAIN                                        = new ISOCountry("ES", 724, "Spain", "ESP", ISOContinent.EUROPE)
  val SRI_LANKA                                    = new ISOCountry("LK", 144, "Sri Lanka", "LKA", ISOContinent.ASIA)
  val SUDAN                                        = new ISOCountry("SD", 729, "Sudan", "SDN", ISOContinent.AFRICA)
  val SURINAME                                     = new ISOCountry("SR", 740, "Suriname", "SUR", ISOContinent.SOUTH_AMERICA)
  val SVALBARD_AND_JAN_MAYEN                       = new ISOCountry("SJ", 744, "Svalbard and Jan Mayen Island", "SJM", ISOContinent.EUROPE)
  val SWAZILAND                                    = new ISOCountry("SZ", 748, "Swaziland", "SWZ", ISOContinent.AFRICA)
  val SWEDEN                                       = new ISOCountry("SE", 752, "Sweden", "SWE", ISOContinent.EUROPE)
  val SWITZERLAND                                  = new ISOCountry("CH", 756, "Switzerland", "CHE", ISOContinent.EUROPE)
  val SYRIAN_ARAB_REPUBLIC                         = new ISOCountry("SY", 760, "Syrian Arab Republic", "SYR", ISOContinent.ASIA)
  val TAIWAN                                       = new ISOCountry("TW", 158, "Taiwan (Province of China)", "TWN", ISOContinent.ASIA)
  val TAJIKISTAN                                   = new ISOCountry("TJ", 762, "Tajikistan", "TJK", ISOContinent.ASIA)
  val TANZANIA                                     = new ISOCountry("TZ", 834, "Tanzania, United Republic of", "TZA", ISOContinent.AFRICA)
  val THAILAND                                     = new ISOCountry("TH", 764, "Thailand", "THA", ISOContinent.ASIA)
  val THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO         = new ISOCountry("CD", 180, "Congo (the Democratic Republic of the)", "COD", ISOContinent.AFRICA)
  val TIMOR_LESTE                                  = new ISOCountry("TL", 626, "Timor-Leste", "TLS", ISOContinent.ASIA)
  val TOGO                                         = new ISOCountry("TG", 768, "Togo", "TGO", ISOContinent.AFRICA)
  val TOKELAU                                      = new ISOCountry("TK", 772, "Tokelau", "TKL", ISOContinent.OCEANIA)
  val TONGA                                        = new ISOCountry("TO", 776, "Tonga", "TON", ISOContinent.OCEANIA)
  val TRINIDAD_AND_TOBAGO                          = new ISOCountry("TT", 780, "Trinidad and Tobago", "TTO", ISOContinent.NORTH_AMERICA)
  val TUNISIA                                      = new ISOCountry("TN", 788, "Tunisia", "TUN", ISOContinent.AFRICA)
  val TURKEY                                       = new ISOCountry("TR", 792, "Turkey", "TUR", ISOContinent.ASIA)
  val TURKMENISTAN                                 = new ISOCountry("TM", 795, "Turkmenistan", "TKM", ISOContinent.ASIA)
  val TURKS_AND_CAICOS_ISLANDS                     = new ISOCountry("TC", 796, "Turks and Caicos Islands", "TCA", ISOContinent.NORTH_AMERICA)
  val TUVALU                                       = new ISOCountry("TV", 798, "Tuvalu", "TUV", ISOContinent.OCEANIA)
  val UGANDA                                       = new ISOCountry("UG", 800, "Uganda", "UGA", ISOContinent.AFRICA)
  val UKRAINE                                      = new ISOCountry("UA", 804, "Ukraine", "UKR", ISOContinent.EUROPE)
  val UNITED_ARAB_EMIRATES                         = new ISOCountry("AE", 784, "United Arab Emirates", "ARE", ISOContinent.ASIA)
  val UNITED_KINGDOM                               = new ISOCountry("GB", 826, "United Kingdom of Great Britain and Northern Ireland", "GBR", ISOContinent.EUROPE)
  val UNITED_STATES                                = new ISOCountry("US", 840, "United States of America", "USA", ISOContinent.NORTH_AMERICA)
  val UNITED_STATES_MINOR_OUTLYING_ISLANDS         = new ISOCountry("UM", 581, "United States Minor Outlying Islands (the)", "UMI", ISOContinent.OCEANIA)
  val URUGUAY                                      = new ISOCountry("UY", 858, "Uruguay", "URY", ISOContinent.SOUTH_AMERICA)
  val US_VIRGIN_ISLANDS                            = new ISOCountry("VI", 850, "United States Virgin Islands", "VIR", ISOContinent.NORTH_AMERICA)
  val UZBEKISTAN                                   = new ISOCountry("UZ", 860, "Uzbekistan", "UZB", ISOContinent.ASIA)
  val VANUATU                                      = new ISOCountry("VU", 548, "Vanuatu", "VUT", ISOContinent.OCEANIA)
  val VATICAN_CITY_STATE                           = new ISOCountry("VA", 336, "Holy See (the)", "VAT", ISOContinent.EUROPE)
  val VENEZUELA                                    = new ISOCountry("VE", 862, "Venezuela (Bolivarian Republic of)", "VEN", ISOContinent.SOUTH_AMERICA)
  val VIET_NAM                                     = new ISOCountry("VN", 704, "Viet Nam", "VNM", ISOContinent.ASIA)
  val WALLIS_AND_FUTUNA                            = new ISOCountry("WF", 876, "Wallis and Futuna Islands", "WLF", ISOContinent.OCEANIA)
  val WESTERN_SAHARA                               = new ISOCountry("EH", 732, "Western Sahara", "ESH", ISOContinent.AFRICA)
  val YEMEN                                        = new ISOCountry("YE", 887, "Yemen", "YEM", ISOContinent.ASIA)
  val ZAMBIA                                       = new ISOCountry("ZM", 894, "Zambia", "ZMB", ISOContinent.AFRICA)
  val ZIMBABWE                                     = new ISOCountry("ZW", 716, "Zimbabwe", "ZWE", ISOContinent.AFRICA)
  // format: ON

  /**
   * Retrieves ISOCountry based on alpha-2 code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param countryCode Country code, ie. US, CN
   * @return ISOCountry
   */
  def apply(countryCode: String): ISOCountry =
    ISOCountry.values.find(countryCode == _.toString) match {
      case Some(country) ⇒ country
      case _             ⇒ throw new ParseException(s"Invalid alpha-2 code '$countryCode' for ISOCountry")
    }

  /**
   * Retrieves Option[ISOCountry] based on alpha-2 code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param countryCode Country code, ie. US, CN
   * @return Option[ISOCountry]
   */
  def from(countryCode: String): Option[ISOCountry] =
    ISOCountry.values.find(countryCode == _.toString)

  /**
   * Retrieves ISOCountry based on numeric code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param numericCode Numeric code, ie. 840, 826
   * @return ISOCountry
   */
  def apply(numericCode: Int): ISOCountry =
    ISOCountry.values.find(numericCode == _.numericalCode) match {
      case Some(country) ⇒ country
      case _             ⇒ throw new ParseException(s"Invalid numeric code '$numericCode' for ISOCountry")
    }

  /**
   * Retrieves Option[ISOCountry] based on numeric code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param numericCode Numeric code, ie. 840, 826
   * @return Option[ISOCountry]
   */
  def from(numericCode: Int): Option[ISOCountry] =
    ISOCountry.values.find(numericCode == _.numericalCode)

  /**
   * Retrieves Seq[ISOCountry] based on ISOContinent.
   * https://www.iso.org/obp/ui/#search
   *
   * @param continent ISOContinent.NORTH_AMERICA, ISOContinent.ASIA
   * @return Option[ISOCountry]
   */
  def fromContinent(continent: ISOContinent): Vector[ISOCountry] =
    ISOCountry.values.filter(_.continent == continent)
}