using System;

namespace ${applicationName}.Api.Adapters;
public interface IDummyAdapter {
    public void Test();
}
public class DummyAdapter: IDummyAdapter {
    public DummyAdapter(string test){}
    public void Test() {

    }
}