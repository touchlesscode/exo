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

//Slightly adapted from https://gist.github.com/d6y/376f1a4b178c343ff415
trait Enum {
  //DIY enum type
  import java.util.concurrent.atomic.AtomicReference
  //Concurrency paranoia

  type EnumVal <: Value //This is a type that needs to be found in the implementing class

  private val _values = new AtomicReference(Vector[EnumVal]()) //Stores our enum values

  //Adds an EnumVal to our storage, uses CCAS to make sure it's thread safe, returns the ordinal
  private final def addEnumVal(newVal: EnumVal): Int = {
    import _values.{ compareAndSet, get }
    val oldVec = get
    val newVec = oldVec :+ newVal
    if ((get eq oldVec) && compareAndSet(oldVec, newVec))
      newVec.indexWhere(_ eq newVal)
    else addEnumVal(newVal)
  }

  def values: Vector[EnumVal] =
    _values.get

  //Here you can get all the enums that exist for this type

  //This is the trait that we need to extend our EnumVal type with, it does the book-keeping for us
  protected trait Value extends Ordered[Value] {
    self: EnumVal ⇒
    //Enforce that no one mixes in Value in a non-EnumVal type
    final val ordinal = addEnumVal(this) //Adds the EnumVal and returns the ordinal

    def compare(that: Value) = this.ordinal - that.ordinal

    def value: String //All enum values should have a value

    override def toString = value

    //And that name is used for the toString operation
    override def equals(other: Any) = this eq other.asInstanceOf[AnyRef]

    override def hashCode = 31 * (this.getClass.## + value.## + ordinal)
  }

}

private sealed class EnumValueParseException(message: String) extends Exception(message)

private final class ParseException(message: String) extends EnumValueParseException(message)
