package gw.internal.gosu.compiler.featureliteral

uses gw.test.TestClass
uses gw.testharness.DoNotVerifyResource
uses gw.lang.reflect.features.IMethodReference

@DoNotVerifyResource
class CoreFeatureLiteralTest extends TestClass {

  function testBasicInstanceFunctionWorks() {
    var f = FeatureLiteralClass#instFunc1()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( "doh", f.invoke(new FeatureLiteralClass()) )
  }

  function testOverloadedInstanceFunctionWork() {
    var f1 = FeatureLiteralClass#instFunc2(Object) 
    assertNotNull( f1 )
    assertEquals( FeatureLiteralClass, f1.RootType )
    assertEquals( "foo", f1.invoke(new FeatureLiteralClass(), null) )

    var f2 = FeatureLiteralClass#instFunc2(String)
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass, f2.RootType )
    assertEquals( "bar", f2.invoke(new FeatureLiteralClass(), null) )
  }
 
  function testGenericInstanceFunctionWorks() {
    var f = FeatureLiteralClass<String>#instFunc3()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass<String>, f.RootType )
  }

  function testBoundBasicInstanceFunctionWorks() {
    var i = new FeatureLiteralClass()
    var f = i#instFunc1()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( i, f.Ctx )
    assertEquals( "doh", f.invoke() )
  }

  function testBoundGenericInstanceFunctionWorks() {
    var i = new FeatureLiteralClass<String>("blahblah")
    var f = i#instFunc3()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass<String>, f.RootType )
    assertEquals( i, f.Ctx )
    assertEquals( "blahblah", f.invoke() )
  }

  function testBasicStaticFunctionWorks() {
    var f = FeatureLiteralClass#staticInstFunc1()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( "doh", f.invoke() )
  }

  function testOverloadedStaticFunctionWork() {
    var f1 = FeatureLiteralClass#staticInstFunc2(Object) 
    assertNotNull( f1 )
    assertEquals( FeatureLiteralClass, f1.RootType )
    assertEquals( "foo", f1.invoke(null) )

    var f2 = FeatureLiteralClass#staticInstFunc2(String)
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass, f2.RootType )
    assertEquals( "bar", f2.invoke(null) )
  }
  
  function testPrivateBasicInstanceFunctionWorks() {
    var f = FeatureLiteralClass#privateInstFunc1()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( "doh", f.invoke(new FeatureLiteralClass()) )
  }

  function testPrivateOverloadedInstanceFunctionWork() {
    var f1 = FeatureLiteralClass#privateInstFunc2(Object) 
    assertNotNull( f1 )
    assertEquals( FeatureLiteralClass, f1.RootType )
    assertEquals( "foo", f1.invoke(new FeatureLiteralClass(), null) )

    var f2 = FeatureLiteralClass#privateInstFunc2(String)
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass, f2.RootType )
    assertEquals( "bar", f2.invoke(new FeatureLiteralClass(), null) )
  }
 
  function testPrivateGenericInstanceFunctionWorks() {
    var f = FeatureLiteralClass<String>#privateInstFunc3()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass<String>, f.RootType )
  }

  function testPrivateBoundBasicInstanceFunctionWorks() {
    var i = new FeatureLiteralClass()
    var f = i#privateInstFunc1()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( i, f.Ctx )
    assertEquals( "doh", f.invoke() )
  }

  function testPrivateBoundGenericInstanceFunctionWorks() {
    var i = new FeatureLiteralClass<String>("blahblah")
    var f = i#privateInstFunc3()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass<String>, f.RootType )
    assertEquals( i, f.Ctx )
    assertEquals( "blahblah", f.invoke() )
  }

  function testPrivateBasicStaticFunctionWorks() {
    var f = FeatureLiteralClass#privateStaticInstFunc1()
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( "doh", f.invoke() )
  }

  function testPrivateOverloadedStaticFunctionWork() {
    var f1 = FeatureLiteralClass#privateStaticInstFunc2(Object) 
    assertNotNull( f1 )
    assertEquals( FeatureLiteralClass, f1.RootType )
    assertEquals( "foo", f1.invoke(null) )

    var f2 = FeatureLiteralClass#privateStaticInstFunc2(String)
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass, f2.RootType )
    assertEquals( "bar", f2.invoke(null) )
  }
  
  function testBasicInstancePropertyWorks() {
    var f = FeatureLiteralClass#Tee
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    var flc = new FeatureLiteralClass("doh")
    assertEquals( "doh", f.get(flc) )    
    f.set(flc, true)
    assertEquals( true, f.get(flc) )    

    var f2 = FeatureLiteralClass<String>#Tee
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass<String>, f2.RootType )
    var flc2 = new FeatureLiteralClass<String>("doh")
    assertEquals( "doh", f2.get(flc2) )    
    f2.set(flc2, "bar")
    assertEquals( "bar", f2.get(flc2) )    
  }
  
  function testBasicBoundInstancePropertyWorks() {
    var flc = new FeatureLiteralClass("doh")
    var f = flc#Tee
    assertNotNull( f )
    assertEquals( FeatureLiteralClass<String>, f.RootType )
    assertEquals( "doh", f.get() )    
    f.set("foo")
    assertEquals( "foo", f.get() )

    var flc2 = new FeatureLiteralClass<String>("doh")
    var f2 = flc2#Tee
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass<String>, f2.RootType )
    assertEquals( "doh", f2.get() )    
    f2.set("bar")
    assertEquals( "bar", f2.get() )    
  }

  function testBasicStaticPropertyWorks() {
    FeatureLiteralClass.StaticStringProp = "doh"
    var f = FeatureLiteralClass#StaticStringProp
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( "doh", f.get(null) )
    f.set(null, "bar")
    assertEquals( "bar", f.get(null) )
  }

  function testPrivateBasicInstancePropertyWorks() {
    var f = FeatureLiteralClass#PrivateTee
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    var flc = new FeatureLiteralClass("doh")
    assertEquals( "doh", f.get(flc) )    
    f.set(flc, true)
    assertEquals( true, f.get(flc) )    

    var f2 = FeatureLiteralClass<String>#PrivateTee
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass<String>, f2.RootType )
    var flc2 = new FeatureLiteralClass<String>("doh")
    assertEquals( "doh", f2.get(flc2) )    
    f2.set(flc2, "bar")
    assertEquals( "bar", f2.get(flc2) )    
  }
  
  function testPrivateBasicBoundInstancePropertyWorks() {
    var flc = new FeatureLiteralClass<String>("doh")
    var f = flc#PrivateTee
    assertNotNull( f )
    assertEquals( FeatureLiteralClass<String>, f.RootType )
    assertEquals( "doh", f.get() )    
    f.set("foo")
    assertEquals( "foo", f.get() )

    var flc2 = new FeatureLiteralClass<String>("doh")
    var f2 = flc2#PrivateTee
    assertNotNull( f2 )
    assertEquals( FeatureLiteralClass<String>, f2.RootType )
    assertEquals( "doh", f2.get() )    
    f2.set("bar")
    assertEquals( "bar", f2.get() )    
  }

  function testPrivateBasicStaticPropertyWorks() {
    FeatureLiteralClass.StaticStringProp = "doh"
    var f = FeatureLiteralClass#PrivateStaticStringProp
    assertNotNull( f )
    assertEquals( FeatureLiteralClass, f.RootType )
    assertEquals( "doh", f.get(null) )
    f.set(null, "bar")
    assertEquals( "bar", f.get(null) )
  }
  
  function testBasicConstructorReference() {
     var cr = FeatureLiteralClass#construct()
     var val = cr.invoke()
     assertNotNull( val )

     var cr2 = FeatureLiteralClass#construct(Object)
     var val2 = cr2.invoke("foo")
     assertNotNull( val2 )
     assertEquals( "foo", val2.Tee )
     
     var cr3 = FeatureLiteralClass#construct(boolean)
     var val3 = cr3.invoke(false)
     assertNotNull( val3 )
  }
  
  function testPrivateBasicConstructorReference() {
     var cr = FeatureLiteralClass#construct(boolean, boolean)
     var val = cr.invoke(false, false)
     assertNotNull( val )
  }

  function testBasicSimplePropertyChaningWithPropRoot() {
    var mc = FeatureLiteralClass<String>#ThisProp#Tee
    var flc = new FeatureLiteralClass<String>("doh")
    assertEquals( "doh", mc.get( flc ) )
    mc.set( flc,  "bar" )
    assertEquals( "bar", mc.get( flc ) )
  } 
  
  function testBasicBoundSimplePropChaningWithPropRoot() {
    var mc = new FeatureLiteralClass<String>("doh")#ThisProp#Tee
    assertEquals( "doh", mc.get() )
  }

  function testBasicSimplePropChaningWithStaticPropRoot() {
    var mc = FeatureLiteralClass#StaticNewProp#Tee
    assertEquals( null, mc.get(null) )
  }

  function testBasicBoundPropertyChaning() {
    var mc = new FeatureLiteralClass<String>("bar")#ThisProp#Tee
    assertEquals( "bar", mc.get() )
  }

  function testBasicFunctionBoundArguments() {
     var fl = FeatureLiteralClass#instFunc5(null, "foo", false)
     assertEquals( {null, "foo", false}, fl.invoke(new FeatureLiteralClass() ) )

     var fl2 = new FeatureLiteralClass()#instFunc5(null, "foo", false)
     assertEquals( {null, "foo", false}, fl2.invoke() )
  }

  function testAnnotationHasFeatures() {
    var fa = FeatureLiteralClass.Type.TypeInfo.Annotations.map( \ ai -> ai.Instance ).whereTypeIs(FeatureAnnotation).first()
    assertEquals( 3, fa.Features.Count ) 
  }
  
  function testRelativeReferencesWorks() {
    new FeatureLiteralClass().testRelativeReferences() 
  }

  function testInnerClassRefsWor() {
    var mr = FeatureLiteralClass.Inner#innerFunc()
    assertEquals( "inner", mr.invoke( new FeatureLiteralClass().makeInner() ) )
  }

  function testBadCaseCausesErrors() {
    assertFalse(Errant_HasBadCaseInFeatureLiteral.Type.Valid)
    var pes = Errant_HasBadCaseInFeatureLiteral.Type.ParseResultsException.ParseExceptions
    for(line in 6..11) {
      assertTrue(pes.hasMatch( \ pe -> pe.Line == line ))
    }
  }

  function testBadFeatureLiteralCausesError() {
    assertFalse(Errant_BadChainingInFeatureLiteral.Type.Valid)
    var pes = Errant_BadChainingInFeatureLiteral.Type.ParseResultsException.ParseExceptions
    assertTrue(pes.hasMatch( \ pe -> pe.Line == 11 ))
    assertTrue(pes.hasMatch( \ pe -> pe.Line == 12 ))
  }

  function testGenricMethodWithOverloadingWorks() {
    var ref = Generics1#pFun(java.lang.CharSequence)
    assertNotNull(ref)
  }

  class Foo {
    var _bar : Bar as BarProp
  }
  
  class Bar {
    var _str : String as StringProp
  }

  class Generics1 {
    function pFun<T extends java.lang.CharSequence>(t : T) : Object { return "Generic With Bound" }
    function pFun<T>(t: T) : Object { return "Generic No Bound" }
  }

  function testChainedPropsWorkOnInnerClasses() {
    var f = new Foo() { :BarProp = new Bar() }
  
    var pr = Foo#BarProp#StringProp
    assertNull( f.BarProp.StringProp )
    pr.set(f, "val1")
    assertEquals( "val1", f.BarProp.StringProp )
    assertEquals( "val1", pr.get(f) )

    var bpr = f#BarProp#StringProp
    f.BarProp.StringProp = null
    assertNull( f.BarProp.StringProp )
    bpr.set("val1")
    assertEquals( "val1", f.BarProp.StringProp )
    assertEquals( "val1", bpr.get() )
  }

    function testSuperSymbolReferences() {
      var s = new Sub()

      // fields
      assertEquals( "privateVar", s.getSuperPrivateVar() )
      assertEquals( "protectedVar", s.getSuperProtectedVar() )
      assertEquals( "publicVar", s.getSuperPublicVar() )

      // props
      assertEquals( "privateProp", s.getSuperPrivateProp() )
      assertEquals( "protectedProp", s.getSuperProtectedProp() )
      assertEquals( "publicProp", s.getSuperPublicProp() )

      // functions
      assertEquals( "privateFunction", s.getSuperPrivateFunction() )
      assertEquals( "protectedFunction", s.getSuperProtectedFunction() )
      assertEquals( "publicFunction", s.getSuperPublicFunction() )
    }

    class Super {

      private construct(){}
      protected construct(i : int){}
      public construct(i : int, s : String){}

      var _privateVar : String = "privateVar"
      protected var _protectedVar : String = "protectedVar"
      public var _publicVar : String = "publicVar"

      private property get PrivateProp() : String { return "privateProp" }
      protected property get ProtectedProp() : String { return "protectedProp" }
      property get PublicProp() : String { return "publicProp" }

      private function privateFunction() : String { return "privateFunction" }
      protected function protectedFunction() : String { return "protectedFunction" }
      function publicFunction() : String { return "publicFunction" }

    }

    class Sub extends Super {

      function getSuperPrivateVar() : String { return super#_privateVar.get() }
      function getSuperProtectedVar() : String { return super#_protectedVar.get() }
      function getSuperPublicVar() : String { return super#_publicVar.get() }

      function getSuperPrivateProp() : String { return super#PrivateProp.get() }
      function getSuperProtectedProp() : String { return super#ProtectedProp.get() }
      function getSuperPublicProp() : String { return super#PublicProp.get() }

      function getSuperPrivateFunction() : String { return super#privateFunction().invoke() }
      function getSuperProtectedFunction() : String { return super#protectedFunction().invoke() }
      function getSuperPublicFunction() : String { return super#publicFunction().invoke() }

    }

  structure StructForFLTests { property get X() : int }
  class ClassForStructFLTests { property get X() : int { return 0 } }

  function testPropertyFeatureLiteralGetsWorkWithStructBasedTypes() {
    var f : StructForFLTests = new ClassForStructFLTests()
    assertEquals(0, f.X)
    assertEquals(0, StructForFLTests#X.get(f))
  }

  structure StructForFL2Tests { property get X() : int property set X(i: int) }
  class ClassForStructFL2Tests { var _x : int as X }
  function testPropertyFeatureLiteralSetsWorkWithStructBasedTypes() {
    var f : StructForFL2Tests = new ClassForStructFL2Tests()
    f.X = 42
    assertEquals(42, StructForFL2Tests#X.get(f))
  }

  structure StructForFL3Tests { function foo(i : int):Integer}
  class ClassForStructFL3Tests { function foo(i : int) : int { return i + 1 }  }
  function testMethodFeatureLiteralInvokeWorkWithStructBasedTypes() {
    var f : StructForFL3Tests = new ClassForStructFL3Tests()
    assertEquals(43, StructForFL3Tests#foo().invoke(f, 42))
  }

}