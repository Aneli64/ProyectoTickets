using System;
using System.IO;
using System.Net;
using System.Text;
using System.Xml;
namespace TeamSupport.Api.Consumer
{
  class Program
  {
    static void Main(string[] args)
    {
      // Create a company
      string URI = "https://app.na2.teamsupport.com/api/json/customers";
      HttpWebRequest request = (HttpWebRequest)WebRequest.Create(URI);
      string organizationID       = "748448";
      string apiToken             = "55e32b85-8a30-4533-84a0-9f5b1b81f45f";
    //   string username             = "publi01@iditic.com";
    //   string password             = "Z1yXseUE0P";
      string credentials          = string.Format("{0}:{1}", organizationID, apiToken);
      Byte[] credentialsByteArray = UTF8Encoding.UTF8.GetBytes(credentials);
      string encodedCredentials   = Convert.ToBase64String(credentialsByteArray);
      request.Headers.Add("Authorization", "Basic " + encodedCredentials);
      request.Method      = "POST";
      request.ContentType = "application/json";
      request.UserAgent   = "your organization name";
      MemoryStream stream = new MemoryStream();
      XmlTextWriter writer = new XmlTextWriter(stream, new UTF8Encoding(false));
      writer.Formatting = Formatting.Indented;
      writer.WriteStartElement("Customer");
      writer.WriteElementString("Name", "Second Company, Inc.");
      writer.WriteElementString("Website", "www.secondcompany.com");
      writer.WriteElementString("Customercustomfield1", "CustomField1Value");
      writer.WriteFullEndElement();
      writer.Flush();
      stream.Position = 0;
      StreamReader reader = new StreamReader(stream);
      string body = reader.ReadToEnd();
      Byte[] bodyByteArray = UTF8Encoding.UTF8.GetBytes(body);
      int offSet = 0;
      int count = bodyByteArray.Length;
      using (Stream requestStream = request.GetRequestStream())
      {
        requestStream.Write(bodyByteArray, offSet, count);
      }
      HttpWebResponse response = (HttpWebResponse)request.GetResponse();
    }
  }
}