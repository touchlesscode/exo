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

/**
 * ISO 3166-2 is part of the ISO 3166 standard
 * and defines codes for identifying the principal subdivisions
 * (e.g., provinces or states) of all countries coded in ISO 3166-1.
 * The official name of the standard is
 * "Codes for the representation of names of countries and their subdivisions – Part 2: Country subdivision code."
 */
trait ISOCountrySubdivisionOceania extends CountrySubdivision {
  // format: OFF
  val `Australian Capital Territory` = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "Australian Capital Territory", "AU-ACT")
  val `New South Wales`              = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "New South Wales", "AU-NSW")
  val `Northern Territory`           = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "Northern Territory", "AU-NT")
  val `Queensland`                   = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "Queensland", "AU-QLD")
  val `South Australia`              = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "South Australia", "AU-SA")
  val `Tasmania`                     = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "Tasmania", "AU-TAS")
  val `Victoria - Australia`         = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "Victoria", "AU-VIC")
  val `Western Australia`            = new ISOCountrySubdivision(ISOCountry.AUSTRALIA, "Western Australia", "AU-WA")
  val `Central Fiji`                 = new ISOCountrySubdivision(ISOCountry.FIJI, "Central", "FJ-C")
  val `Northern Fiji`                = new ISOCountrySubdivision(ISOCountry.FIJI, "Northern", "FJ-N")
  val `Western Fiji`                 = new ISOCountrySubdivision(ISOCountry.FIJI, "Western", "FJ-W")
  val `Chuuk`                        = new ISOCountrySubdivision(ISOCountry.MICRONESIA, "Chuuk", "FM-TRK")
  val `Kosrae`                       = new ISOCountrySubdivision(ISOCountry.MICRONESIA, "Kosrae", "FM-KSA")
  val `Pohnpei`                      = new ISOCountrySubdivision(ISOCountry.MICRONESIA, "Pohnpei", "FM-PNI")
  val `Yap`                          = new ISOCountrySubdivision(ISOCountry.MICRONESIA, "Yap", "FM-YAP")
  val `Gilbert Islands`              = new ISOCountrySubdivision(ISOCountry.KIRIBATI, "Gilbert Islands", "KI-G")
  val `Line Islands`                 = new ISOCountrySubdivision(ISOCountry.KIRIBATI, "Line Islands", "KI-L")
  val `Ailinglaplap Atoll`           = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Ailinglaplap Atoll", "MH-ALL")
  val `Ailuk Atoll`                  = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Ailuk Atoll", "MH-ALK")
  val `Arno Atoll`                   = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Arno Atoll", "MH-ARN")
  val `Aur Atoll`                    = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Aur Atoll", "MH-AUR")
  val `Ebon Atoll`                   = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Ebon Atoll", "MH-EBO")
  val `Enewetak Atoll`               = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Enewetak Atoll", "MH-ENI")
  val `Jabat Island`                 = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Jabat Island", "MH-JAB")
  val `Jaluit Atoll`                 = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Jaluit Atoll", "MH-JAL")
  val `Kili Island`                  = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Kili Island", "MH-KIL")
  val `Kwajalein Atoll`              = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Kwajalein Atoll", "MH-KWA")
  val `Lae Atoll`                    = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Lae Atoll", "MH-LAE")
  val `Lib Island`                   = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Lib Island", "MH-LIB")
  val `Likiep Atoll`                 = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Likiep Atoll", "MH-LIK")
  val `Majuro Atoll`                 = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Majuro Atoll", "MH-MAJ")
  val `Maloelap Atoll`               = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Maloelap Atoll", "MH-MAL")
  val `Mejit Island`                 = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Mejit Island", "MH-MEJ")
  val `Mili Atoll`                   = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Mili Atoll", "MH-MIL")
  val `Namdrik Atoll`                = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Namdrik Atoll", "MH-NMK")
  val `Namu Atoll`                   = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Namu Atoll", "MH-NMU")
  val `Rongelap Atoll`               = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Rongelap Atoll", "MH-RON")
  val `Ujae Atoll`                   = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Ujae Atoll", "MH-UJA")
  val `Utrik Atoll`                  = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Utrik Atoll", "MH-UTI")
  val `Wotho Atoll`                  = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Wotho Atoll", "MH-WTH")
  val `Wotje Atoll`                  = new ISOCountrySubdivision(ISOCountry.MARSHALL_ISLANDS, "Wotje Atoll", "MH-WTJ")
  val `Yaren`                        = new ISOCountrySubdivision(ISOCountry.NAURU, "Yaren", "NR-14")
  val `Auckland`                     = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Auckland", "NZ-AUK")
  val `Bay of Plenty`                = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Bay of Plenty", "NZ-BOP")
  val `Canterbury`                   = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Canterbury", "NZ-CAN")
  val `Chatham Islands`              = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Chatham Islands", "NZ-CIT")
  val `Gisborne`                     = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Gisborne", "NZ-GIS")
  val `Hawke's Bay`                  = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Hawke's Bay", "NZ-HKB")
  val `Manawatu-Wanganui`            = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Manawatu-Wanganui", "NZ-MWT")
  val `Marlborough`                  = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Marlborough", "NZ-MBH")
  val `Nelson`                       = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Nelson", "NZ-NSN")
  val `Northland`                    = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Northland", "NZ-NTL")
  val `Otago`                        = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Otago", "NZ-OTA")
  val `Southland`                    = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Southland", "NZ-STL")
  val `Taranaki`                     = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Taranaki", "NZ-TKI")
  val `Tasman`                       = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Tasman", "NZ-TAS")
  val `Waikato`                      = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Waikato", "NZ-WKO")
  val `Wellington`                   = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "Wellington", "NZ-WGN")
  val `West Coast`                   = new ISOCountrySubdivision(ISOCountry.NEW_ZEALAND, "West Coast", "NZ-WTC")
  val `Bougainville`                 = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Bougainville", "PG-NSB")
  val `Chimbu`                       = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Chimbu", "PG-CPK")
  val `East New Britain`             = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "East New Britain", "PG-EBR")
  val `East Sepik`                   = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "East Sepik", "PG-ESW")
  val `Eastern Highlands`            = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Eastern Highlands", "PG-EHG")
  val `Enga`                         = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Enga", "PG-EPW")
  val `Gulf`                         = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Gulf", "PG-GPK")
  val `Madang`                       = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Madang", "PG-MPM")
  val `Manus`                        = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Manus", "PG-MRL")
  val `Milne Bay`                    = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Milne Bay", "PG-MBA")
  val `Morobe`                       = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Morobe", "PG-MPL")
  val `National Capital District`    = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "National Capital District", "PG-NCD")
  val `New Ireland`                  = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "New Ireland", "PG-NIK")
  val `Northern Papua New Guinea`    = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Northern", "PG-NPP")
  val `Southern Highlands`           = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Southern Highlands", "PG-SHM")
  val `West New Britain`             = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "West New Britain", "PG-WBK")
  val `West Sepik`                   = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "West Sepik", "PG-SAN")
  val `Western Papua New Guinea`     = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Western", "PG-WPD")
  val `Western Highlands`            = new ISOCountrySubdivision(ISOCountry.PAPUA_NEW_GUINEA, "Western Highlands", "PG-WHM")
  val `Aimeliik`                     = new ISOCountrySubdivision(ISOCountry.PALAU, "Aimeliik", "PW-002")
  val `Airai`                        = new ISOCountrySubdivision(ISOCountry.PALAU, "Airai", "PW-004")
  val `Angaur`                       = new ISOCountrySubdivision(ISOCountry.PALAU, "Angaur", "PW-010")
  val `Kayangel`                     = new ISOCountrySubdivision(ISOCountry.PALAU, "Kayangel", "PW-100")
  val `Koror`                        = new ISOCountrySubdivision(ISOCountry.PALAU, "Koror", "PW-150")
  val `Melekeok`                     = new ISOCountrySubdivision(ISOCountry.PALAU, "Melekeok", "PW-212")
  val `Ngaraard`                     = new ISOCountrySubdivision(ISOCountry.PALAU, "Ngaraard", "PW-214")
  val `Ngarchelong`                  = new ISOCountrySubdivision(ISOCountry.PALAU, "Ngarchelong", "PW-218")
  val `Ngardmau`                     = new ISOCountrySubdivision(ISOCountry.PALAU, "Ngardmau", "PW-222")
  val `Ngatpang`                     = new ISOCountrySubdivision(ISOCountry.PALAU, "Ngatpang", "PW-224")
  val `Ngiwal`                       = new ISOCountrySubdivision(ISOCountry.PALAU, "Ngiwal", "PW-228")
  val `Peleliu`                      = new ISOCountrySubdivision(ISOCountry.PALAU, "Peleliu", "PW-350")
  val `Central`                      = new ISOCountrySubdivision(ISOCountry.SOLOMON_ISLANDS, "Central", "SB-CE")
  val `Guadalcanal`                  = new ISOCountrySubdivision(ISOCountry.SOLOMON_ISLANDS, "Guadalcanal", "SB-GU")
  val `Isabel`                       = new ISOCountrySubdivision(ISOCountry.SOLOMON_ISLANDS, "Isabel", "SB-IS")
  val `Makira`                       = new ISOCountrySubdivision(ISOCountry.SOLOMON_ISLANDS, "Makira", "SB-MK")
  val `Malaita`                      = new ISOCountrySubdivision(ISOCountry.SOLOMON_ISLANDS, "Malaita", "SB-ML")
  val `Western - Sudan`              = new ISOCountrySubdivision(ISOCountry.SOLOMON_ISLANDS, "Western", "SB-WE")
  val `Ha'apai`                      = new ISOCountrySubdivision(ISOCountry.TONGA, "Ha'apai", "TO-02")
  val `Tongatapu`                    = new ISOCountrySubdivision(ISOCountry.TONGA, "Tongatapu", "TO-04")
  val `Vava'u`                       = new ISOCountrySubdivision(ISOCountry.TONGA, "Vava'u", "TO-05")
  val `Tuvalu`                       = new ISOCountrySubdivision(ISOCountry.TUVALU, "Tuvalu", "TV")
  val `Malampa`                      = new ISOCountrySubdivision(ISOCountry.VANUATU, "Malampa", "VU-MAP")
  val `Sanma`                        = new ISOCountrySubdivision(ISOCountry.VANUATU, "Sanma", "VU-SAM")
  val `Shefa`                        = new ISOCountrySubdivision(ISOCountry.VANUATU, "Shefa", "VU-SEE")
  val `Tafea`                        = new ISOCountrySubdivision(ISOCountry.VANUATU, "Tafea", "VU-TAE")
  val `Torba`                        = new ISOCountrySubdivision(ISOCountry.VANUATU, "Torba", "VU-TOB")
  val `Wallis and Futuna Islands`    = new ISOCountrySubdivision(ISOCountry.WALLIS_AND_FUTUNA, "Wallis and Futuna Islands", "WF")
  val `A'ana`                        = new ISOCountrySubdivision(ISOCountry.SAMOA, "A'ana", "WS-AA")
  val `Atua`                         = new ISOCountrySubdivision(ISOCountry.SAMOA, "Atua", "WS-AT")
  val `Gagaifomauga`                 = new ISOCountrySubdivision(ISOCountry.SAMOA, "Gagaifomauga", "WS-GI")
  val `Palauli`                      = new ISOCountrySubdivision(ISOCountry.SAMOA, "Palauli", "WS-PA")
  val `Tuamasaga`                    = new ISOCountrySubdivision(ISOCountry.SAMOA, "Tuamasaga", "WS-TU")
  // format: ON
}
object ISOCountrySubdivisionOceania extends ISOCountrySubdivisionOceania
