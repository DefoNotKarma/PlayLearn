using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseLook : MonoBehaviour
{
  
    public float MouseSens = 100f;
    public Transform Player;
    float xRotation = 0f;
    public float YRotClamps = 70f;

    // Start is called before the first frame update
    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;
    }

    // Update is called once per frame
    void Update()
    {
        float MouseX = Input.GetAxis("Mouse X") * MouseSens * Time.deltaTime;
        float MouseY = Input.GetAxis("Mouse Y") * MouseSens * Time.deltaTime;

        xRotation -= MouseY;
        xRotation = Mathf.Clamp(xRotation, -YRotClamps, YRotClamps);

        transform.localRotation = Quaternion.Euler(xRotation, 0f , 0f);
        Player.Rotate(Vector2.up * MouseX);
    }
}
