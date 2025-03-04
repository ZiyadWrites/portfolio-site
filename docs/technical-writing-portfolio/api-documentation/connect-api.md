---
sidebar_position: 5
---
# Connect API

:::info

This is an example from a Connect API that I documented during my time at a previous company. As you can see, the request and response are still in XML format, which is less common compared to the more widely used JSON. YAML has also gained popularity in modern APIs.

:::

## Retrieve a list of Mobile Terminated(MT) callback types 
This service call retrieves a list of valid MT callback types (methods), such as HTTP GET and HTTP POST, along with their corresponding IDs. This information is required when you want to configure a callback to receive delivery status updates. The callback is sent to a URL you specify, using either the GET or POST method.

### Resource description
The authenticate_user service call is required to authenticate a user’s username and 
password. Before a user can authenticate their username and password they will have 
to email activate their account. 

### Endpoint and methods
This endpoint retrieves a list of valid MT callback types (methods) and their associated callback IDs.

**Endpoint**: get_list_callback  
**Method**: GET

| Name   | Parameter | Restricted Value(s)     |
|--------|-----------|--------------------------|
| Action | action    | get_list_callback        |



### Request example  

```
<clickatellsdk>
  <action>get_list_callback</action>
</clickatellsdk>
```

### Response example and schema  

```
<ClICKATELLSDK>
  <Action>get_list_callback</Action>
  <Result>Success</Result>
  <Values>
    <Value>
      <callback_type_id>0</callback_type_id>
      <callback_type>HTTP GET</callback_type>
    </Value>
    ...
    <Value>
      <callback_type_id>6</callback_type_id>
      <callback_type>SOAP POST</callback_type>
    </Value>
  </Values>
  <Timestamp>1316512313</Timestamp>
</ClICKATELLSDK>
```

**Possible errors**
| Error Code | Message                                  | Description                                                              |
|------------|------------------------------------------|--------------------------------------------------------------------------|
| 004        | Source IP address blocked               | If a specific source IP address has been blocked by Clickatell.          |
| 007        | Command not allowed                     | If the specific command has been disabled at a global/API level.         |
| 008        | Connect API established                 | If the API has been disabled (no commands allowed).                      |
| 009        | HTTP protocol not allowed, require HTTPS| If the API call is performed via HTTP (and not HTTPS-SSL).               |
| 999        | Unknown error                           | An unknown error has occurred. Please contact the support department.    |




