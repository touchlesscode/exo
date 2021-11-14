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

import com.vitorsvieira.iso.ISOCountry.ISOCountry

/**
 * ISO 3166-2 is part of the ISO 3166 standard
 * and defines codes for identifying the principal subdivisions
 * (e.g., provinces or states) of all countries coded in ISO 3166-1.
 * The official name of the standard is
 * "Codes for the representation of names of countries and their subdivisions – Part 2: Country subdivision code."
 */
trait CountrySubdivision extends Enum {

  sealed class EnumVal(
    val country:         ISOCountry,
    val subdivisionName: String,
    val value:           String) extends Value

  type ISOCountrySubdivision = EnumVal
}

object ISOCountrySubdivision
    extends ISOCountrySubdivisionAfrica
    with ISOCountrySubdivisionAsia
    with ISOCountrySubdivisionEurope
    with ISOCountrySubdivisionNorthAmerica
    with ISOCountrySubdivisionSouthAmerica
    with ISOCountrySubdivisionOceania {

  /**
   * Retrieves ISOCountrySubdivision based on 3166-2 xx-xx code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param subdivisionCode Country code, ie. US-NY, US-AL
   * @return ISOCountrySubdivision
   */
  def apply(subdivisionCode: String): ISOCountrySubdivision = ISOCountrySubdivision.values.find(subdivisionCode == _.toString) match {
    case Some(country) ⇒ country
    case None          ⇒ throw new ParseException(s"Invalid 3166-2 code '$subdivisionCode' for ISOCountrySubdivision")
  }

  /**
   * Retrieves Option[ISOCountrySubdivision] based on 3166-2 xx-xx code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param subdivisionCode Country code, ie. US-NY, US-AL
   * @return Option[ISOCountrySubdivision]
   */
  def from(subdivisionCode: String): Option[ISOCountrySubdivision] =
    ISOCountrySubdivision.values.find(subdivisionCode == _.toString)

  /**
   * Retrieves Seq[ISOCountrySubdivision] based on xx-xx code.
   * https://www.iso.org/obp/ui/#search
   *
   * @param country ie. ISOCountry.JAPAN, ISOCountry.CANADA
   * @return Option[ISOCountrySubdivision]
   */
  def fromCountry(country: ISOCountry): Vector[ISOCountrySubdivision] =
    ISOCountrySubdivision.values.filter(_.country == country)
}
