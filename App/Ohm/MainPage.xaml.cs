using System;
using Windows.UI.Core;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Navigation;

namespace Ohm
{
  public sealed partial class MainPage : Page
  {
    public MainPage()
    {
      InitializeComponent();
      edgeView.Navigate(new Uri("http://ohms.azurewebsites.net"));
      SetEdgeSize();
    }

    protected override void OnNavigatedTo(NavigationEventArgs e)
    {
      base.OnNavigatedTo(e);
      Window.Current.SizeChanged += Current_SizeChanged;
    }

    private void Current_SizeChanged(object sender, WindowSizeChangedEventArgs e)
    {
      SetEdgeSize();
    }

    private void SetEdgeSize()
    {
      edgeView.Width = Window.Current.Bounds.Width;
      edgeView.Height = Window.Current.Bounds.Height;
    }

    protected override void OnNavigatedFrom(NavigationEventArgs e)
    {
      base.OnNavigatedFrom(e);
      Window.Current.SizeChanged -= Current_SizeChanged;
    }
  }
}
