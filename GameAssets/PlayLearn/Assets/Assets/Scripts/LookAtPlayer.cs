using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LookAtPlayer : MonoBehaviour
{

    public Transform targetCamera;
    public float Effectdistance = 50f;
    public float xClamp, yClamp;
    // Start is called before the first frame update
    void Start()
    {
        
    }
float ClampAngle(float angle, float min, float max)
    {
        if (angle < -360f)
            angle += 360f;
        if (angle > 360f)
            angle -= 360f;
        return Mathf.Clamp(angle, min, max);
    }
    // Update is called once per frame
    void Update()
    {
        float dis = Vector3.Distance(targetCamera.position, transform.position);
        if (dis < Effectdistance){
            Quaternion desiredRot = Quaternion.LookRotation(
                targetCamera.position - transform.position);

            Vector3 rot = desiredRot.eulerAngles;
            rot.x = ClampAngle(rot.x , -xClamp , xClamp);
            rot.y = ClampAngle(rot.y , -yClamp , yClamp);

            transform.rotation = Quaternion.Euler(rot);
        }
    }
}
