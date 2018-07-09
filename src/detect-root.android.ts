//import * as utils from "utils/utils";
import { android as androidApp } from 'tns-core-modules/application';

declare const android: any;
declare const java: any;
declare const com: any;
let _check:any;

function getInstanceRootBeer():any{
   console.log("getting the root instance");
   if(_check){
      return _check;
   }else{
      _check = new com.scottyab.rootbeer.RootBeer(androidApp.context);
      return _check;
   }
}

export function isRooted():boolean {
  console.log("executing the tests");
  let check = getInstanceRootBeer();
  return check.isRooted();
}

export function isRootedWithoutBusyBoxCheck():boolean {
  let check = getInstanceRootBeer();
  return check.isRootedWithoutBusyBoxCheck();
}

export function detectTestKeys():boolean {
  let check = getInstanceRootBeer();
  return check.detectTestKeys();
}

export function detectRootManagementApps():boolean {
  let check = getInstanceRootBeer();
  return check.detectRootManagementApps();
}

export function detectPotentiallyDangerousApps():boolean {
  let check = getInstanceRootBeer();
  return check.detectPotentiallyDangerousApps();
}

